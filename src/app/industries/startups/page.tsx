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
  title: "Startup Software Engineering | Rapid MVP Builds & Technical Architecture",
  description:
    "CookMyTech acts as the dedicated software engineering partner for tech founders and venture-backed startups. We build investor-ready MVPs in 8–12 weeks with clean Next.js and TypeScript architecture.",
  path: "/industries/startups",
});

export default function StartupsIndustryPage() {
  const pageUrl = "https://www.cookmytech.com/industries/startups";

  const serviceSchema = generateServiceSchema({
    name: "Startup Software Engineering Services",
    description:
      "Full-stack MVP engineering for startups, technical due diligence preparation, rapid 8–12 week prototype launches, and fractional CTO guidance.",
    url: pageUrl,
    serviceType: "Startup MVP & Systems Engineering",
  });

  const faqs = [
    {
      question: "How fast can you launch an MVP for our startup?",
      answer:
        "Our standard MVP delivery cycle ranges from 8 to 12 weeks from initial scoping to production launch. We commit initial working code within 48 hours of sprint kickoff, delivering bi-weekly demos so you can test features with real beta users and early design partners.",
    },
    {
      question: "How do you ensure our software passes VC technical due diligence?",
      answer:
        "We build exclusively using industry-standard enterprise stacks: TypeScript, Next.js, Node.js, Python, PostgreSQL, and AWS/GCP infrastructure. We enforce modular repository architecture, comprehensive API documentation, CI/CD automated test pipelines, and clean dependency management that breeze through technical due diligence audits by institutional investors.",
    },
    {
      question: "Do founders own 100% of the intellectual property and code from day one?",
      answer:
        "Yes, unconditionally. All source code repositories, design tokens, database schemas, cloud infrastructure accounts, and third-party credentials belong 100% to your company from commit zero. We enforce zero vendor lock-in and support seamless handoffs to your in-house team when you scale.",
    },
    {
      question: "How does CookMyTech collaborate with non-technical vs technical founders?",
      answer:
        "For non-technical founders, we serve as your fractional engineering leadership, translating business goals into rigorous technical architectures, scoping tradeoffs, and budgeting token/cloud costs. For technical founders, we integrate seamlessly as senior full-stack peers who write idiomatic, high-concurrency code without micromanagement.",
    },
    {
      question: "How do you handle scope creep and budget predictability for early-stage startups?",
      answer:
        "We work on fixed-scope, sprint-based milestone deliverables. Before writing code, we break your product into core 'must-have' features versus secondary backlog items, establishing transparent weekly sprint goals with zero hidden overhead.",
    },
  ];

  const faqSchema = generateFaqSchema(faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Industries", item: "/industries" },
    { name: "Startups", item: "/industries/startups" },
  ]);

  const pillars = [
    {
      title: "First Commit Within 48 Hours",
      desc: "Zero bureaucracy or prolonged onboarding. We configure CI/CD pipelines, staging environments, and database schemas to ship production code in sprint one.",
    },
    {
      title: "8–12 Week Lean MVP Delivery",
      desc: "Fast-tracked engineering designed to validate product-market fit, onboard early paying design partners, and prepare for institutional seed/Series A rounds.",
    },
    {
      title: "100% IP & Source Code Ownership",
      desc: "You own all GitHub repositories, cloud infrastructure, and documentation from day one with absolute transparency and zero proprietary lock-in.",
    },
    {
      title: "Investor-Ready Scalable Stacks",
      desc: "Engineered with Next.js 16, TypeScript, Node.js, Python, and PostgreSQL—technologies top engineering talent and VC tech auditors respect.",
    },
    {
      title: "Embedded AI & LLM Capabilities",
      desc: "Give your startup an unfair advantage with custom AI agents, automated workflow tools, and vector search tailored directly to your niche.",
    },
    {
      title: "Seamless In-House Team Handoff",
      desc: "When you hire full-time developers, we facilitate clean codebase handoffs, architectural walkthroughs, and onboarding sessions with zero friction.",
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
            { name: "Startups", item: "/industries/startups" },
          ]}
        />

        {/* Hero Section */}
        <section className="py-12 border-b border-black">
          <div className="text-xs uppercase tracking-widest bg-black text-white px-3 py-1 font-bold inline-block mb-4">
            Startup Engineering Partner
          </div>
          <h1
            className="font-display text-[clamp(2.2rem,5vw,4.5rem)] font-bold leading-none uppercase mb-6"
            style={{ fontWeight: 800 }}
          >
            Software Engineering for Startups & Founders
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-gray-700 max-w-3xl mb-8">
            Speed and architectural integrity determine startup survival. CookMyTech operates as your senior software studio, architecting venture-ready MVPs, scalable SaaS platforms, and AI applications in 8 to 12 weeks so you can acquire users and raise capital.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-black text-white text-xs uppercase tracking-widest px-8 py-4 border border-black hover:bg-white hover:text-black transition-colors font-bold inline-block"
            >
              Start Project Consultation →
            </Link>
            <Link
              href="/services/mvp-development"
              className="bg-gray-100 text-black text-xs uppercase tracking-widest px-8 py-4 border border-black hover:bg-black hover:text-white transition-colors font-bold inline-block"
            >
              View MVP Capabilities →
            </Link>
          </div>
        </section>

        {/* Core Pillars */}
        <section className="py-16 border-b border-black">
          <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
            Why Founders Choose Us
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold uppercase mb-8">
            The Startup Engineering Playbook
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((item) => (
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
            Founder FAQ
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold uppercase mb-8">
            Frequently Asked Questions for Founders
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
              Building a High-Growth Tech Startup?
            </h2>
            <p className="text-xs text-gray-400 mt-2 max-w-xl leading-relaxed">
              Schedule a 30-minute scoping call directly with our engineering founders. We provide a milestone breakdown and fixed cost estimate within 24 hours.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-white text-black text-xs uppercase tracking-widest px-8 py-4 font-bold hover:bg-gray-200 transition-colors whitespace-nowrap"
          >
            Schedule Founder Call →
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
