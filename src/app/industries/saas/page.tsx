import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { constructMetadata } from "@/lib/metadata";
import {
  generateServiceSchema,
  generateFaqSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema";

export const metadata = constructMetadata({
  title: "SaaS Software Engineering | Multi-Tenant Cloud Architecture & Billing",
  description:
    "CookMyTech partners with SaaS founders and product teams to engineer high-scale multi-tenant cloud backends, Stripe billing engines, real-time analytics, and embedded AI workflows.",
  path: "/industries/saas",
});

export default function SaasIndustryPage() {
  const pageUrl = "https://www.cookmytech.com/industries/saas";

  const serviceSchema = generateServiceSchema({
    name: "SaaS Software Engineering Services",
    description:
      "Enterprise SaaS engineering, multi-tenant database isolation, subscription billing infrastructure, role-based access control, and scalable cloud architectures.",
    url: pageUrl,
    serviceType: "SaaS Systems Engineering",
  });

  const faqs = [
    {
      question: "Which multi-tenant database isolation model do you recommend for SaaS applications?",
      answer:
        "The optimal model depends on compliance, cost, and tenancy volume. We frequently architect a hybrid pooled model with Row-Level Security (RLS) in PostgreSQL for cost efficiency and fast onboarding, transitioning high-value enterprise tiers to isolated schemas or dedicated databases when HIPAA, SOC 2, or custom data residency mandates require strict physical isolation.",
    },
    {
      question: "How do you manage Stripe billing complexity, tiered subscriptions, and usage-based metering?",
      answer:
        "We implement robust subscription lifecycle engines utilizing Stripe Billing and webhooks verified with cryptographic signatures. For usage-based metering (e.g. AI token usage, API calls, storage), we capture high-frequency telemetry via Redis counters or ClickHouse and flush aggregated usage records asynchronously, avoiding database lock contention.",
    },
    {
      question: "How do you engineer Role-Based Access Control (RBAC) and team management in B2B SaaS?",
      answer:
        "We design granular permission systems featuring hierarchical organizations, multi-seat workspaces, and role-based permissions (Owner, Admin, Member, Read-Only). We support SAML 2.0 / SSO integrations (Okta, Azure AD, Google Workspace) via Auth.js or WorkOS to satisfy enterprise procurement requirements.",
    },
    {
      question: "Can you help retrofit AI agent workflows and LLM intelligence into an existing SaaS platform?",
      answer:
        "Yes. We specialize in embedding contextual AI features—such as automated document summarization, natural language reporting, and autonomous copilots—into established SaaS codebases with strict tenant-level vector isolation so tenant data is never exposed to other accounts.",
    },
    {
      question: "How do you ensure high availability and sub-100ms API latency as SaaS user counts scale?",
      answer:
        "We implement multi-region edge caching with Redis, connection pooling via PgBouncer, asynchronous background workers (BullMQ / Celery), and containerized microservices orchestrated on AWS ECS or Google Cloud Run with automated horizontal autoscaling.",
    },
  ];

  const faqSchema = generateFaqSchema(faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Industries", item: "/industries" },
    { name: "SaaS", item: "/industries/saas" },
  ]);

  const capabilities = [
    {
      title: "Multi-Tenant Cloud Backends",
      desc: "Robust tenant isolation schemas with Row-Level Security (RLS), custom subdomain routing, and automated tenant provisioning microservices.",
    },
    {
      title: "Stripe Billing & Subscription Engines",
      desc: "End-to-end billing lifecycles, automated proration, self-serve billing portals, multi-currency support, and dunning management.",
    },
    {
      title: "Enterprise SSO & Security Compliance",
      desc: "SAML 2.0, SCIM directory synchronization, enterprise audit logs, and SOC 2 / GDPR-ready data architecture.",
    },
    {
      title: "High-Volume Usage Metering",
      desc: "Asynchronous telemetry aggregation pipelines that meter API requests, token spend, and seat allocation without impacting core application throughput.",
    },
    {
      title: "Embedded AI & LLM Workflows",
      desc: "Custom AI copilot features, Retrieval-Augmented Generation grounded in tenant data, and automated workflow triggers.",
    },
    {
      title: "Real-Time Collaborative Dashboards",
      desc: "WebSocket-driven interactive interfaces, live presence, activity streams, and instantaneous multi-user updates.",
    },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />

      <main id="main-content" className="flex-1 max-w-screen-xl mx-auto px-6 py-16 w-full">
        <Breadcrumbs
          items={[
            { name: "Home", item: "/" },
            { name: "Industries", item: "/industries" },
            { name: "SaaS", item: "/industries/saas" },
          ]}
        />

        {/* Hero Section */}
        <section className="py-12 border-b border-black">
          <div className="text-xs uppercase tracking-widest bg-black text-white px-3 py-1 font-bold inline-block mb-4">
            SaaS Systems Engineering Studio
          </div>
          <h1
            className="font-display text-[clamp(2.2rem,5vw,4.5rem)] font-bold leading-none uppercase mb-6"
            style={{ fontWeight: 800 }}
          >
            Software Engineering for SaaS Platforms
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-gray-700 max-w-3xl mb-8">
            Scale your B2B or B2C SaaS product with confidence. CookMyTech engineers multi-tenant cloud backends, resilient Stripe billing architectures, enterprise SAML SSO, high-throughput analytics, and embedded AI capabilities tailored for modern recurring-revenue businesses.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-black text-white text-xs uppercase tracking-widest px-8 py-4 border border-black hover:bg-white hover:text-black transition-colors font-bold inline-block"
            >
              Consult SaaS Engineers →
            </Link>
            <Link
              href="/services/saas-development"
              className="bg-gray-100 text-black text-xs uppercase tracking-widest px-8 py-4 border border-black hover:bg-black hover:text-white transition-colors font-bold inline-block"
            >
              Explore SaaS Services →
            </Link>
          </div>
        </section>

        {/* Architecture Capabilities */}
        <section className="py-16 border-b border-black">
          <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
            Core Engineering
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold uppercase mb-8">
            Production SaaS Engineering Modules
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((item) => (
              <div
                key={item.title}
                className="p-6 border border-black bg-gray-50 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-display text-lg font-bold uppercase mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 border-b border-black">
          <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
            SaaS Architecture FAQ
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold uppercase mb-8">
            Frequently Asked Questions on SaaS Engineering
          </h2>
          <div className="space-y-6 max-w-3xl">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-b border-gray-200 pb-6">
                <h3 className="font-display text-lg font-bold mb-2">
                  {faq.question}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-black text-white p-8 md:p-12 border border-black flex flex-col md:flex-row items-center justify-between gap-8 mt-12">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold uppercase">
              Ready to Build or Scale Your SaaS Platform?
            </h2>
            <p className="text-xs text-gray-400 mt-2 max-w-xl leading-relaxed">
              Partner with senior engineers who understand SaaS economics, tenancy models, and high-concurrency systems design.
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
