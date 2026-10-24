import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { constructMetadata } from "@/lib/metadata";
import { generateServiceSchema, generateFaqSchema } from "@/lib/schema";

export const metadata = constructMetadata({
  title: "MVP Development Company | Startup MVP Development Services in India",
  description:
    "CookMyTech is an MVP development company engineering production-ready SaaS and AI MVPs for startup founders across India, US, UK, and worldwide in 3 to 6 weeks.",
  path: "/services/mvp-development",
});

export default function MvpDevelopmentPage() {
  const serviceUrl = "https://www.cookmytech.com/services/mvp-development";
  const serviceSchema = generateServiceSchema({
    name: "Startup MVP Development Services",
    description:
      "Rapid production-grade minimum viable product engineering for tech startups, SaaS founders, and venture-backed innovators.",
    url: serviceUrl,
    serviceType: "Startup Product & MVP Engineering",
  });

  const faqs = [
    {
      question: "How quickly can CookMyTech ship a functional, production-ready MVP?",
      answer:
        "Our standard MVP engineering cycle delivers the first code commit within 48 hours and ships a fully functional, production-ready MVP in 3 to 6 weeks. We follow strict scope prioritization so you can launch to market, test user demand, and start acquiring paying customers immediately.",
    },
    {
      question: "Will the MVP codebase scale, or will we have to rewrite it after raising capital?",
      answer:
        "We build exclusively with production-grade engineering: Next.js App Router, TypeScript, PostgreSQL, and clean microservice patterns. Your MVP is never throwaway code; it is designed to smoothly scale to tens of thousands of active users and pass institutional technical due diligence without a full rewrite.",
    },
    {
      question: "What is included in a typical SaaS or AI MVP build?",
      answer:
        "A complete MVP includes responsive web UI, secure authentication (OAuth2, magic links), database schema architecture with relational integrity, Stripe/Paddle payment or subscription checkout, core business feature logic (including AI/LLM tool calls if required), transactional emails, and deployment on modern cloud hosting.",
    },
    {
      question: "How do you handle scope creep and timeline predictability?",
      answer:
        "We establish a strict Product Requirement Document (PRD) with milestone deliverables before development begins. Any secondary feature ideas that emerge during sprints are cataloged into a post-launch Phase 2 backlog, keeping your launch timeline and budget completely predictable.",
    },
    {
      question: "Do startup founders retain 100% IP and repository ownership?",
      answer:
        "Yes, 100%. You receive direct GitHub repository collaborator access from day one. All code, design assets, and cloud deployment configurations belong exclusively to your company with zero licensing restrictions.",
    },
  ];

  const faqSchema = generateFaqSchema(faqs);

  const processSteps = [
    {
      step: "01",
      title: "Sprint Scoping & Architecture Blueprint (Days 1–5)",
      desc: "We distill your vision into an actionable technical PRD, prioritize core revenue-driving user flows, design database schemas, and establish the engineering timeline.",
    },
    {
      step: "02",
      title: "Foundational Infrastructure & 48-Hour First Commit (Days 6–10)",
      desc: "We configure the repository, CI/CD pipelines, database migrations, and authentication infrastructure with full transparency and initial working commits.",
    },
    {
      step: "03",
      title: "Core Feature & API Engineering (Weeks 2–4)",
      desc: "We build the interactive user interface, business workflow logic, third-party API integrations, and optional AI copilot or vector search pipelines.",
    },
    {
      step: "04",
      title: "Monetization & Webhook Reconciliation (Week 4)",
      desc: "We integrate payment checkouts (Stripe/Paddle), transactional email notifications (Resend/Postmark), and admin telemetry dashboards.",
    },
    {
      step: "05",
      title: "Security Hardening, Testing & Public Launch (Weeks 5–6)",
      desc: "We perform automated end-to-end testing, responsive cross-browser audits, SEO optimization, and deploy to production cloud infrastructure.",
    },
  ];

  const deliverables = [
    "Production-grade Next.js / TypeScript web application with responsive UI",
    "Scalable PostgreSQL database schema with automated migration scripts",
    "Secure user authentication (Google OAuth, GitHub, Magic Links, or Email/Password)",
    "Payment integration (Stripe Checkout, Subscriptions, or Usage Metering)",
    "Admin management panel to monitor users, transactions, and system health",
    "Continuous deployment CI/CD workflow via GitHub Actions to Vercel or AWS",
    "100% intellectual property transfer and repository ownership",
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
            { name: "MVP Development", item: "/services/mvp-development" },
          ]}
        />

        {/* HERO */}
        <section className="py-12 border-b border-black">
          <div className="text-xs uppercase tracking-widest bg-black text-white px-3 py-1 font-bold inline-block mb-4">
            Startup MVP Engineering
          </div>
          <h1
            className="font-display text-[clamp(2.2rem,5vw,4.5rem)] font-bold leading-none uppercase mb-6"
            style={{ fontWeight: 800 }}
          >
            MVP Development Services for Startups
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-gray-700 max-w-3xl mb-8">
            CookMyTech is an MVP development company for startup founders and growing product teams. We build production-ready SaaS platforms, web applications, and AI products in 3 to 6 weeks with senior software engineering, fixed-scope sprint pricing, and zero technical debt.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-black text-white text-xs uppercase tracking-widest px-8 py-4 border border-black hover:bg-white hover:text-black transition-colors font-bold inline-block"
            >
              Consult MVP Engineers →
            </Link>
            <Link
              href="/blog/how-to-build-a-saas-mvp"
              className="bg-white text-black text-xs uppercase tracking-widest px-8 py-4 border border-black hover:bg-black hover:text-white transition-colors font-bold inline-block"
            >
              Read How to Build a SaaS MVP
            </Link>
          </div>
        </section>

        {/* PROBLEM & SOLUTION */}
        <section className="py-16 border-b border-black grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
              The Founder Dilemma
            </div>
            <h2 className="font-display text-2xl font-bold uppercase mb-4">
              The Pitfall of No-Code and Flawed Prototypes
            </h2>
            <p className="text-xs text-gray-700 leading-relaxed mb-4">
              Many startup founders get trapped between two extremes: wasting 6–9 months and large budgets hiring slow agency teams, or using restrictive no-code builders that fail the moment custom data logic, high user concurrency, or complex API integrations are required.
            </p>
            <p className="text-xs text-gray-700 leading-relaxed">
              When investors or early customers test a buggy prototype, slow page loads and broken auth flows ruin credibility before product-market fit can ever be measured.
            </p>
          </div>

          <div className="border border-black p-8 bg-gray-50">
            <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
              The CookMyTech Advantage
            </div>
            <h2 className="font-display text-2xl font-bold uppercase mb-4">
              Production Architecture Built in Weeks
            </h2>
            <p className="text-xs text-gray-700 leading-relaxed mb-4">
              We eliminate technical risk by building your MVP on battle-tested frameworks: Next.js, TypeScript, PostgreSQL, and clean API services. You launch fast with software that looks premium, runs lightning-fast, and scales seamlessly.
            </p>
            <ul className="space-y-2 text-xs font-bold text-gray-900">
              <li className="flex items-center gap-2">✔ First Git commit pushed within 48 hours of onboarding</li>
              <li className="flex items-center gap-2">✔ Fixed-scope milestone delivery with zero surprise expenses</li>
              <li className="flex items-center gap-2">✔ 100% intellectual property and repository ownership from day one</li>
              <li className="flex items-center gap-2">✔ Production code built to pass venture capital technical due diligence</li>
            </ul>
          </div>
        </section>

        {/* WHO IT IS FOR */}
        <section className="py-16 border-b border-black">
          <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
            Target Audience
          </div>
          <h2 className="font-display text-3xl font-bold uppercase mb-8">
            Who Our MVP Development Services Serve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border border-black bg-white flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-bold mb-3">Non-Technical & Domain Founders</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  Industry experts, domain operators, and commercial leaders who have verified market demand and need a senior technical team to engineer their software correctly the first time.
                </p>
              </div>
              <Link href="/services/custom-software-development" className="text-xs font-bold uppercase underline">
                Custom Software Services →
              </Link>
            </div>

            <div className="p-6 border border-black bg-white flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-bold mb-3">Technical Founders Needing Velocity</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  CTOs and technical founders who want to delegate the foundational boilerplate (auth, payments, responsive UI, database setup) so they can focus on proprietary algorithms and core IP.
                </p>
              </div>
              <Link href="/services/saas-development" className="text-xs font-bold uppercase underline">
                SaaS Product Development →
              </Link>
            </div>

            <div className="p-6 border border-black bg-white flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-bold mb-3">AI & Venture-Backed Innovators</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  Startups raising pre-seed and seed rounds in India, the US, and UK who need a production-grade AI or SaaS product deployed to demonstrate real traction and metrics to investors.
                </p>
              </div>
              <Link href="/services/ai-agent-development" className="text-xs font-bold uppercase underline">
                AI Agent Services →
              </Link>
            </div>
          </div>
        </section>

        {/* TECH STACK */}
        <section className="py-16 border-b border-black">
          <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
            Production Stack
          </div>
          <h2 className="font-display text-3xl font-bold uppercase mb-6">
            Proven Technologies for Rapid, Scalable MVPs
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
            {[
              { title: "Next.js", desc: "React server components, high-speed SSR, and SEO readiness" },
              { title: "TypeScript", desc: "Strict type safety preventing runtime bugs across the stack" },
              { title: "PostgreSQL & Prisma", desc: "Battle-tested relational database with clean schema migrations" },
              { title: "Stripe Checkout", desc: "Instant global credit card and subscription payments" },
              { title: "Tailwind CSS", desc: "Clean, responsive, customized modern design systems" },
              { title: "Auth0 / Clerk / NextAuth", desc: "Multi-provider authentication with OAuth2 and MFA" },
              { title: "OpenAI & Anthropic", desc: "Rapid LLM integration and function calling pipelines" },
              { title: "Vercel & AWS", desc: "Zero-configuration edge hosting with automated CI/CD" },
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
            Sprint Timeline
          </div>
          <h2 className="font-display text-3xl font-bold uppercase mb-8">
            Our 5-Stage MVP Engineering Process
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
              You receive full code ownership, cloud infrastructure credentials, and documentation designed for immediate commercial deployment.
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
              Budget Discipline & Cost Factors
            </h2>
            <p className="text-xs text-gray-700 leading-relaxed mb-4">
              Building an MVP requires capital efficiency. We avoid over-engineering non-essential features and describe project cost factors clearly:
            </p>
            <ul className="space-y-2.5 text-xs text-gray-700">
              <li>• <strong>Feature Prioritization:</strong> We identify the single core user action that generates value and build supporting features leanly.</li>
              <li>• <strong>API Integrations:</strong> Scoping is influenced by the number of external third-party services (e.g. CRMs, banking APIs, or custom AI models).</li>
              <li>• <strong>Fixed-Scope Guarantees:</strong> Transparent milestones with deliverables defined upfront to protect your runway.</li>
              <li>• <strong>No Hidden Licensing:</strong> Zero recurring fees or platform lock-in; you own every file created.</li>
            </ul>
          </div>
        </section>

        {/* RELATED SERVICES & GUIDES */}
        <section className="py-16 border-b border-black">
          <h2 className="font-display text-2xl font-bold uppercase mb-6">
            Complementary Services & Startup Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <Link
              href="/services/saas-development"
              className="p-5 border border-black hover:bg-black hover:text-white transition-colors"
            >
              <div className="font-bold mb-1">SaaS Development Services →</div>
              <div className="text-gray-500 hover:text-gray-300 text-[11px]">Multi-tenant platforms & Stripe billing</div>
            </Link>
            <Link
              href="/services/nextjs-development"
              className="p-5 border border-black hover:bg-black hover:text-white transition-colors"
            >
              <div className="font-bold mb-1">Next.js Development →</div>
              <div className="text-gray-500 hover:text-gray-300 text-[11px]">Modern App Router web applications</div>
            </Link>
            <Link
              href="/blog/how-to-build-a-saas-mvp"
              className="p-5 border border-black hover:bg-black hover:text-white transition-colors"
            >
              <div className="font-bold mb-1">Guide: How to Build a SaaS MVP →</div>
              <div className="text-gray-500 hover:text-gray-300 text-[11px]">Scoping, architecture & margin planning</div>
            </Link>
            <Link
              href="/blog/saas-development-cost-in-india"
              className="p-5 border border-black hover:bg-black hover:text-white transition-colors"
            >
              <div className="font-bold mb-1">SaaS & MVP Cost Guide →</div>
              <div className="text-gray-500 hover:text-gray-300 text-[11px]">Cost comparisons and budget expectations</div>
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
              Ready to Ship Your Product?
            </div>
            <h2 className="font-display text-2xl md:text-4xl font-bold uppercase">
              Build Your MVP With CookMyTech
            </h2>
            <p className="text-xs text-gray-400 mt-2 max-w-xl">
              Discuss your product vision directly with senior software engineers. Receive an actionable technical architecture proposal and fixed estimate within 24 hours.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-white text-black text-xs uppercase tracking-widest px-8 py-4 font-bold hover:bg-gray-200 transition-colors whitespace-nowrap"
          >
            Start MVP Consultation →
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
