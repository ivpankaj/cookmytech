import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { constructMetadata } from "@/lib/metadata";
import { generateServiceSchema, generateFaqSchema } from "@/lib/schema";

export const metadata = constructMetadata({
  title: "SaaS Development Company | Custom Multi-Tenant SaaS Product Engineering",
  description:
    "CookMyTech is a custom SaaS development company in India building scalable multi-tenant web applications, Stripe subscription billing engines, and enterprise SaaS platforms.",
  path: "/services/saas-development",
});

export default function SaasDevelopmentPage() {
  const serviceUrl = "https://www.cookmytech.com/services/saas-development";
  const serviceSchema = generateServiceSchema({
    name: "SaaS Development Services",
    description:
      "End-to-end multi-tenant SaaS application engineering, subscription billing engines, database isolation, cloud infrastructure, and user onboarding.",
    url: serviceUrl,
    serviceType: "Software-as-a-Service Product Engineering",
  });

  const faqs = [
    {
      question: "What is the difference between multi-tenant and single-tenant SaaS architecture?",
      answer:
        "In a multi-tenant SaaS architecture, all customer organizations share the same application instance and database infrastructure, isolated logically via Row-Level Security (RLS) or tenant schemas. This model yields maximum cost efficiency, unified updates, and straightforward scalability. In single-tenant architecture, each customer receives a dedicated infrastructure instance, which offers higher isolation for strict healthcare or defense compliance at significantly higher cloud hosting costs.",
    },
    {
      question: "Which billing engines and payment models do you integrate into SaaS applications?",
      answer:
        "We implement industry-standard billing platforms including Stripe Billing, Lemon Squeezy, and Paddle. We support complex monetization models: tiered monthly/annual subscriptions, seat-based licenses with team member allocations, usage-metered overages (API calls, storage, token consumption), and enterprise custom invoicing with webhook reconciliation.",
    },
    {
      question: "How do you guarantee data security between competing tenant organizations?",
      answer:
        "We enforce database-level Row-Level Security (RLS) on PostgreSQL, rigorous schema validation at the API middleware layer, and role-based access control (RBAC). Every database query is cryptographically scoped to the authenticated tenant's UUID, preventing cross-tenant data leaks by design.",
    },
    {
      question: "What factors affect the cost and timeline of custom SaaS development?",
      answer:
        "Cost and timeline are driven by feature scope, authentication complexity (SSO/SAML vs OAuth2), monetization model (flat rate vs hybrid metered usage), external integrations, and compliance needs. Typical production-ready SaaS MVPs are delivered in 6 to 10 weeks under fixed-scope sprint agreements.",
    },
    {
      question: "Do clients retain full intellectual property and source code ownership?",
      answer:
        "Yes, 100%. Upon completion, all Git repositories, infrastructure-as-code manifests, database schemas, and documentation are transferred entirely to your organization with zero vendor lock-in.",
    },
  ];

  const faqSchema = generateFaqSchema(faqs);

  const processSteps = [
    {
      step: "01",
      title: "Product Scoping & Architecture Blueprint",
      desc: "We define core user personas, map multi-tenant permission hierarchies, design database schemas, and validate monetization models before writing a line of code.",
    },
    {
      step: "02",
      title: "Tenant Isolation & Auth Infrastructure",
      desc: "We configure enterprise authentication (OAuth2, magic links, SAML/SSO), organization switching, team invitation flows, and strict database row-level security.",
    },
    {
      step: "03",
      title: "Core Feature & Dashboard Engineering",
      desc: "We build responsive, zero-CLS web applications using Next.js App Router, TypeScript, and high-concurrency Node.js or Go backend microservices.",
    },
    {
      step: "04",
      title: "Billing Engines & Webhook Automation",
      desc: "We integrate Stripe or Lemon Squeezy with webhook listening queues, automated invoice generation, failed payment recovery (dunning), and usage metering.",
    },
    {
      step: "05",
      title: "Security Auditing & Cloud Deployment",
      desc: "We conduct penetration testing, load testing, and deploy containerized Docker services on AWS or Vercel with automated CI/CD and uptime monitoring.",
    },
  ];

  const deliverables = [
    "Complete TypeScript / Next.js production codebase with zero technical debt",
    "Multi-tenant PostgreSQL schema with Row-Level Security (RLS) isolation",
    "Production-ready Stripe / Paddle subscription billing and webhook sync",
    "Organization management, team invitations, and role-based permissions (RBAC)",
    "Admin telemetry dashboard for user analytics, churn, and MRR tracking",
    "Automated Docker containerization and GitHub Actions CI/CD deployment pipelines",
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
            { name: "SaaS Development", item: "/services/saas-development" },
          ]}
        />

        {/* HERO */}
        <section className="py-12 border-b border-black">
          <div className="text-xs uppercase tracking-widest bg-black text-white px-3 py-1 font-bold inline-block mb-4">
            SaaS Product Engineering Studio
          </div>
          <h1
            className="font-display text-[clamp(2.2rem,5vw,4.5rem)] font-bold leading-none uppercase mb-6"
            style={{ fontWeight: 800 }}
          >
            Custom SaaS Development Services
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-gray-700 max-w-3xl mb-8">
            CookMyTech is a premier SaaS development company in India serving founders and companies across India, the United States, United Kingdom, and international markets. We engineer multi-tenant cloud platforms, automated subscription engines, and scalable web apps built to scale from day one to enterprise ARR.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-black text-white text-xs uppercase tracking-widest px-8 py-4 border border-black hover:bg-white hover:text-black transition-colors font-bold inline-block"
            >
              Consult SaaS Engineers →
            </Link>
            <Link
              href="/blog/multi-tenant-vs-single-tenant-saas-architecture"
              className="bg-white text-black text-xs uppercase tracking-widest px-8 py-4 border border-black hover:bg-black hover:text-white transition-colors font-bold inline-block"
            >
              Read Multi-Tenancy Architecture Guide
            </Link>
          </div>
        </section>

        {/* PROBLEM & SOLUTION */}
        <section className="py-16 border-b border-black grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
              The Architecture Bottleneck
            </div>
            <h2 className="font-display text-2xl font-bold uppercase mb-4">
              Why Generic Templates & Boilerplates Break at Scale
            </h2>
            <p className="text-xs text-gray-700 leading-relaxed mb-4">
              Many SaaS founders launch using off-the-shelf starter boilerplates. While fast for proof-of-concept, they frequently lack proper multi-tenant database isolation, fail during concurrent webhook processing, and leak customer data when role permissions become complex.
            </p>
            <p className="text-xs text-gray-700 leading-relaxed">
              When paying organizations onboard multiple team members, brittle subscription logic leads to failed recurring payments, incorrect usage metering, and costly technical rewrites that stall product roadmaps.
            </p>
          </div>

          <div className="border border-black p-8 bg-gray-50">
            <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
              The CookMyTech Approach
            </div>
            <h2 className="font-display text-2xl font-bold uppercase mb-4">
              Enterprise-Grade Multi-Tenant SaaS Architecture
            </h2>
            <p className="text-xs text-gray-700 leading-relaxed mb-4">
              We design custom SaaS applications engineered for high concurrency, zero downtime, and bulletproof tenant isolation. Every project includes structured database schemas, resilient webhook queues, and seamless payment reconciliation.
            </p>
            <ul className="space-y-2 text-xs font-bold text-gray-900">
              <li className="flex items-center gap-2">✔ Row-Level Security (RLS) guaranteeing strict cross-tenant isolation</li>
              <li className="flex items-center gap-2">✔ Stripe Billing & automated webhook event handlers with idempotency</li>
              <li className="flex items-center gap-2">✔ Role-based access control (Owner, Admin, Member, Viewer permissions)</li>
              <li className="flex items-center gap-2">✔ Sub-200ms API response targets under heavy multi-tenant load</li>
            </ul>
          </div>
        </section>

        {/* WHO IT IS FOR */}
        <section className="py-16 border-b border-black">
          <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
            Target Audience
          </div>
          <h2 className="font-display text-3xl font-bold uppercase mb-8">
            Who Our SaaS Development Services Are Designed For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border border-black bg-white flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-bold mb-3">Startup Founders & Innovators</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  Founders building high-velocity B2B or B2C SaaS platforms who need an experienced engineering partner to build their MVP rapidly without accumulating technical debt.
                </p>
              </div>
              <Link href="/services/mvp-development" className="text-xs font-bold uppercase underline">
                Explore MVP Services →
              </Link>
            </div>

            <div className="p-6 border border-black bg-white flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-bold mb-3">Agencies & Service Companies</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  Established agencies productizing their internal tools, audits, or operational workflows into recurring SaaS subscription revenue streams.
                </p>
              </div>
              <Link href="/services/custom-software-development" className="text-xs font-bold uppercase underline">
                Custom Software Engineering →
              </Link>
            </div>

            <div className="p-6 border border-black bg-white flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-bold mb-3">AI SaaS Innovators</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  Product teams engineering AI-driven software with LLM integrations, token quota protection, semantic caching, and tiered AI feature gates.
                </p>
              </div>
              <Link href="/services/ai-saas-development" className="text-xs font-bold uppercase underline">
                AI SaaS Development →
              </Link>
            </div>
          </div>
        </section>

        {/* TECH STACK */}
        <section className="py-16 border-b border-black">
          <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
            Engineering Frameworks
          </div>
          <h2 className="font-display text-3xl font-bold uppercase mb-6">
            Our Modern SaaS Technology Stack
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
            {[
              { title: "Next.js App Router", desc: "React server components & high-speed edge rendering" },
              { title: "TypeScript", desc: "Full-stack end-to-end type safety and maintainability" },
              { title: "PostgreSQL & Prisma", desc: "Relational data integrity with Row-Level Security" },
              { title: "Stripe & Paddle", desc: "Global recurring billing, taxes & invoicing" },
              { title: "Redis & BullMQ", desc: "Asynchronous task queues and rate limiting" },
              { title: "NextAuth / Clerk / Auth0", desc: "Secure multi-tenant authentication & SSO" },
              { title: "Docker & AWS", desc: "Containerized deployments, ECS & RDS clustering" },
              { title: "Tailwind CSS", desc: "Modular, responsive, high-performance UI components" },
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
            Our SaaS Development Methodology
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
              What You Receive
            </h2>
            <p className="text-xs text-gray-600 mb-6 leading-relaxed">
              Every SaaS project comes fully documented and packaged for turn-key operation and continuous deployment.
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
              Security, Compliance & Cost Factors
            </h2>
            <p className="text-xs text-gray-700 leading-relaxed mb-4">
              We engineer SaaS products with production durability and margin protection from day one:
            </p>
            <ul className="space-y-2.5 text-xs text-gray-700">
              <li>• <strong>Idempotent Webhooks:</strong> Webhook listeners store processed event IDs to prevent duplicate billing charges on network retries.</li>
              <li>• <strong>Encrypted Secrets & Data at Rest:</strong> AES-256 database encryption and zero plain-text API token storage.</li>
              <li>• <strong>Transparent Cost Factors:</strong> Scoping is influenced by the number of external API integrations, billing tiers, and data residency requirements.</li>
              <li>• <strong>Full Repository Ownership:</strong> 100% intellectual property transfer upon final delivery.</li>
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
              href="/services/mvp-development"
              className="p-5 border border-black hover:bg-black hover:text-white transition-colors"
            >
              <div className="font-bold mb-1">MVP Development Company →</div>
              <div className="text-gray-500 hover:text-gray-300 text-[11px]">Rapid founder prototyping & launch</div>
            </Link>
            <Link
              href="/services/nextjs-development"
              className="p-5 border border-black hover:bg-black hover:text-white transition-colors"
            >
              <div className="font-bold mb-1">Next.js Development →</div>
              <div className="text-gray-500 hover:text-gray-300 text-[11px]">Server components & high-speed SEO web apps</div>
            </Link>
            <Link
              href="/blog/multi-tenant-vs-single-tenant-saas-architecture"
              className="p-5 border border-black hover:bg-black hover:text-white transition-colors"
            >
              <div className="font-bold mb-1">Multi-Tenant Architecture Guide →</div>
              <div className="text-gray-500 hover:text-gray-300 text-[11px]">Deep dive into database isolation & scaling</div>
            </Link>
            <Link
              href="/blog/saas-development-cost-in-india"
              className="p-5 border border-black hover:bg-black hover:text-white transition-colors"
            >
              <div className="font-bold mb-1">SaaS Development Cost Guide →</div>
              <div className="text-gray-500 hover:text-gray-300 text-[11px]">Realistic cost breakdown and sprint estimates</div>
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
              Ready to Launch Your SaaS Platform?
            </div>
            <h2 className="font-display text-2xl md:text-4xl font-bold uppercase">
              Build Scalable SaaS With CookMyTech
            </h2>
            <p className="text-xs text-gray-400 mt-2 max-w-xl">
              Talk directly with senior SaaS software engineers to scope your multi-tenant architecture, billing workflows, and deployment timeline.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-white text-black text-xs uppercase tracking-widest px-8 py-4 font-bold hover:bg-gray-200 transition-colors whitespace-nowrap"
          >
            Start SaaS Consultation →
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
