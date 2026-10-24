import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { constructMetadata } from "@/lib/metadata";
import { generateServiceSchema, generateFaqSchema } from "@/lib/schema";

export const metadata = constructMetadata({
  title: "Next.js Development Company | Custom Next.js Web Application Services",
  description:
    "CookMyTech is a Next.js development company engineering production web apps using Next.js App Router, React Server Components, Turbopack, and 100/100 Core Web Vitals.",
  path: "/services/nextjs-development",
});

export default function NextjsDevelopmentPage() {
  const serviceUrl = "https://www.cookmytech.com/services/nextjs-development";
  const serviceSchema = generateServiceSchema({
    name: "Next.js Development Services",
    description:
      "Production Next.js application development, App Router architecture, React Server Components, Turbopack, and Core Web Vitals optimization.",
    url: serviceUrl,
    serviceType: "Next.js & React Web Application Engineering",
  });

  const faqs = [
    {
      question: "Why is Next.js App Router the leading choice for modern web applications and SEO?",
      answer:
        "Next.js App Router combines React Server Components (RSC) with hybrid Server-Side Rendering (SSR) and Static Site Generation (SSG). By executing data-fetching logic entirely on the server, Next.js ships zero JavaScript client payload for static content, generates instantaneous First Contentful Paint (FCP), delivers perfect Google Lighthouse SEO scores, and provides dynamic metadata and OpenGraph generation out of the box.",
    },
    {
      question: "Can you migrate an existing React SPA (Vite or Create React App) to Next.js?",
      answer:
        "Yes. We specialize in zero-downtime migrations from legacy Single-Page Applications (Vite / CRA) to Next.js App Router. We preserve all existing API contracts, convert client-heavy hooks into server-side fetches, implement permanent 301 redirects to protect existing search equity, and typically achieve a 40–70% reduction in initial JavaScript bundle size.",
    },
    {
      question: "How does CookMyTech ensure 100/100 Google Core Web Vitals scores?",
      answer:
        "We implement disciplined engineering practices: font preloading with next/font/google and display: swap, zero layout shifts (CLS = 0) with explicit image sizing and next/image AVIF/WebP encoding, partial prerendering (PPR) with Suspense streaming, and offloading heavy third-party tracking scripts to non-blocking worker threads.",
    },
    {
      question: "Where can Next.js applications be hosted and deployed?",
      answer:
        "Next.js can be deployed seamlessly to Vercel for global edge CDN distribution, or containerized via Docker and deployed to AWS (ECS / Fargate / Amplify), Google Cloud Run, or custom Kubernetes clusters without vendor lock-in.",
    },
    {
      question: "What factors influence the cost and scope of a custom Next.js web application?",
      answer:
        "Scoping factors include the number of unique page layouts, dynamic rendering vs static generation mix, third-party backend and database integrations, authentication mechanisms (OAuth2/SSO), and custom interactive state components. We provide fixed-scope sprint pricing with clear milestone deliverables.",
    },
  ];

  const faqSchema = generateFaqSchema(faqs);

  const processSteps = [
    {
      step: "01",
      title: "Technical Discovery & Routing Strategy",
      desc: "We analyze your information architecture, define URL slug conventions, map server vs client component boundaries, and plan dynamic caching strategies.",
    },
    {
      step: "02",
      title: "Design System & Tailwind Architecture",
      desc: "We build modular, accessible, zero-CLS UI components using Tailwind CSS and modern headless primitives with responsive mobile-first layouts.",
    },
    {
      step: "03",
      title: "Server Components & Backend Integration",
      desc: "We engineer Server Actions, API route handlers, database connectors (PostgreSQL / Prisma), and edge middlewares with end-to-end TypeScript validation.",
    },
    {
      step: "04",
      title: "SEO, Structured Data & Performance Audits",
      desc: "We implement dynamic XML sitemaps, robots directives, Schema.org JSON-LD structured data, and tune Core Web Vitals to achieve high Lighthouse scores.",
    },
    {
      step: "05",
      title: "CI/CD & Multi-Region Cloud Deployment",
      desc: "We configure automated deployment pipelines with preview environments, automated Lighthouse audits in pull requests, and production monitoring.",
    },
  ];

  const deliverables = [
    "Production-grade Next.js App Router repository with strict TypeScript type safety",
    "Modular component library styled with Tailwind CSS and zero layout shift (CLS = 0)",
    "Server Actions and API route handlers with automated input validation (Zod)",
    "Complete technical SEO architecture: JSON-LD schemas, dynamic metadata, and sitemaps",
    "Automated GitHub Actions CI/CD pipelines targeting Vercel, AWS, or Docker",
    "Full intellectual property transfer and documentation for easy team onboarding",
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
            { name: "Next.js Development", item: "/services/nextjs-development" },
          ]}
        />

        {/* HERO */}
        <section className="py-12 border-b border-black">
          <div className="text-xs uppercase tracking-widest bg-black text-white px-3 py-1 font-bold inline-block mb-4">
            Next.js Specialists
          </div>
          <h1
            className="font-display text-[clamp(2.2rem,5vw,4.5rem)] font-bold leading-none uppercase mb-6"
            style={{ fontWeight: 800 }}
          >
            Next.js Development Services
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-gray-700 max-w-3xl mb-8">
            CookMyTech is a custom Next.js development company. We build high-concurrency web applications, SaaS platforms, and enterprise digital products engineered with Next.js App Router, React Server Components, Turbopack, and edge caching for unbeatable speed and top organic search visibility.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-black text-white text-xs uppercase tracking-widest px-8 py-4 border border-black hover:bg-white hover:text-black transition-colors font-bold inline-block"
            >
              Consult Next.js Engineers →
            </Link>
            <Link
              href="/blog/nextjs-16-turbopack-production-architecture-guide"
              className="bg-white text-black text-xs uppercase tracking-widest px-8 py-4 border border-black hover:bg-black hover:text-white transition-colors font-bold inline-block"
            >
              Read Next.js 16 Architecture Guide
            </Link>
          </div>
        </section>

        {/* PROBLEM & SOLUTION */}
        <section className="py-16 border-b border-black grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
              The Client-Side SPA Dilemma
            </div>
            <h2 className="font-display text-2xl font-bold uppercase mb-4">
              Why Traditional Client-Side SPAs Suffer in Production
            </h2>
            <p className="text-xs text-gray-700 leading-relaxed mb-4">
              Traditional Single Page Applications (like Create React App or unconfigured Vite SPAs) force browsers to download megabytes of JavaScript before rendering a single word. Search engine crawlers frequently time out or index empty HTML shells, causing organic rankings to suffer.
            </p>
            <p className="text-xs text-gray-700 leading-relaxed">
              Mobile users on slower connections endure poor Core Web Vitals (high LCP and INP), driving bounce rates up and destroying conversion rates for digital businesses.
            </p>
          </div>

          <div className="border border-black p-8 bg-gray-50">
            <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
              The CookMyTech Engineering Standard
            </div>
            <h2 className="font-display text-2xl font-bold uppercase mb-4">
              Server-Rendered Performance & Organic Dominance
            </h2>
            <p className="text-xs text-gray-700 leading-relaxed mb-4">
              We leverage Next.js App Router and React Server Components to render pre-computed, semantic HTML directly from the edge. Data is fetched server-side with zero client overhead, producing sub-100ms TTFB and flawless indexing for Googlebot.
            </p>
            <ul className="space-y-2 text-xs font-bold text-gray-900">
              <li className="flex items-center gap-2">✔ Zero-bundle React Server Components streaming data over Suspense</li>
              <li className="flex items-center gap-2">✔ Automated Core Web Vitals tuning: CLS = 0, sub-1.2s LCP, low INP</li>
              <li className="flex items-center gap-2">✔ Centralized metadata, canonical tags, and OpenGraph generators</li>
              <li className="flex items-center gap-2">✔ Native Turbopack compilation for rapid iteration and fast builds</li>
            </ul>
          </div>
        </section>

        {/* WHO IT IS FOR */}
        <section className="py-16 border-b border-black">
          <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
            Target Audience
          </div>
          <h2 className="font-display text-3xl font-bold uppercase mb-8">
            Who Our Next.js Development Services Are For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border border-black bg-white flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-bold mb-3">SaaS Founders & Digital Brands</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  Companies requiring marketing web properties, product landing pages, and authenticated customer dashboards all unified seamlessly within a single high-speed Next.js application.
                </p>
              </div>
              <Link href="/services/saas-development" className="text-xs font-bold uppercase underline">
                SaaS Engineering Services →
              </Link>
            </div>

            <div className="p-6 border border-black bg-white flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-bold mb-3">Enterprise Legacy Migrations</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  Organizations modernizing slow WordPress, PHP, or client-rendered React architectures to Next.js for security, reduced server costs, and improved Google Lighthouse scores.
                </p>
              </div>
              <Link href="/services/custom-software-development" className="text-xs font-bold uppercase underline">
                Custom Software Engineering →
              </Link>
            </div>

            <div className="p-6 border border-black bg-white flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-bold mb-3">AI Application Builders</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  Founders building AI applications who need native Server Actions, streaming LLM chat interfaces (Vercel AI SDK), and edge runtime API gateways.
                </p>
              </div>
              <Link href="/services/ai-application-development" className="text-xs font-bold uppercase underline">
                AI Application Services →
              </Link>
            </div>
          </div>
        </section>

        {/* TECH STACK */}
        <section className="py-16 border-b border-black">
          <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
            Framework Capabilities
          </div>
          <h2 className="font-display text-3xl font-bold uppercase mb-6">
            Supported Next.js Architecture Capabilities
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
            {[
              { title: "App Router & RSC", desc: "Server-side data fetching with zero client bundle overhead" },
              { title: "Partial Prerendering (PPR)", desc: "Static HTML shells streaming dynamic Suspense payloads" },
              { title: "Turbopack Bundler", desc: "Rust-based incremental compilation for sub-second HMR" },
              { title: "Server Actions", desc: "Type-safe RPC mutations without writing manual boilerplate APIs" },
              { title: "Next.js Metadata API", desc: "Automated dynamic canonicals, OpenGraph, and JSON-LD schemas" },
              { title: "Edge Middleware", desc: "Sub-15ms geolocation routing, bot filtering, and auth guards" },
              { title: "Image Optimization", desc: "AVIF/WebP conversion, responsive sizes, and lazy loading" },
              { title: "TypeScript & Tailwind", desc: "Strict end-to-end type safety with modular atomic CSS" },
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
            Development Process
          </div>
          <h2 className="font-display text-3xl font-bold uppercase mb-8">
            Our Next.js Engineering Lifecycle
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
              Every Next.js project is delivered with complete source code, automated CI/CD pipelines, and zero technical debt.
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
              SEO, Performance & Deployment Guarantees
            </h2>
            <p className="text-xs text-gray-700 leading-relaxed mb-4">
              We engineer Next.js web applications to perform at the highest echelon of web standards:
            </p>
            <ul className="space-y-2.5 text-xs text-gray-700">
              <li>• <strong>Core Web Vitals Pass Guarantee:</strong> Every primary landing page is audited to pass Google's CWV metrics on both mobile and desktop.</li>
              <li>• <strong>Multi-Cloud Freedom:</strong> Deploy to Vercel, AWS ECS, Google Cloud Run, or custom Docker infrastructure without code modifications.</li>
              <li>• <strong>Tag-Based Invalidation:</strong> Implementing Next.js revalidateTag() so cached data refreshes in milliseconds when database mutations happen.</li>
              <li>• <strong>Zero Hidden Costs:</strong> Complete code transfer with full repository rights from day one.</li>
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
              href="/services/mern-stack-development"
              className="p-5 border border-black hover:bg-black hover:text-white transition-colors"
            >
              <div className="font-bold mb-1">MERN Stack Development →</div>
              <div className="text-gray-500 hover:text-gray-300 text-[11px]">Node.js, Express, React, and MongoDB builds</div>
            </Link>
            <Link
              href="/services/full-stack-development"
              className="p-5 border border-black hover:bg-black hover:text-white transition-colors"
            >
              <div className="font-bold mb-1">Full-Stack Development →</div>
              <div className="text-gray-500 hover:text-gray-300 text-[11px]">Resilient frontend & backend web engineering</div>
            </Link>
            <Link
              href="/blog/nextjs-16-turbopack-production-architecture-guide"
              className="p-5 border border-black hover:bg-black hover:text-white transition-colors"
            >
              <div className="font-bold mb-1">Next.js 16 Production Guide →</div>
              <div className="text-gray-500 hover:text-gray-300 text-[11px]">Turbopack, PPR & multi-tier caching tutorial</div>
            </Link>
            <Link
              href="/blog/nextjs-vs-react-for-production-applications"
              className="p-5 border border-black hover:bg-black hover:text-white transition-colors"
            >
              <div className="font-bold mb-1">Next.js vs React Guide →</div>
              <div className="text-gray-500 hover:text-gray-300 text-[11px]">When to use App Router vs traditional SPAs</div>
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
              Ready for Unbeatable Web Performance?
            </div>
            <h2 className="font-display text-2xl md:text-4xl font-bold uppercase">
              Build With CookMyTech's Next.js Engineers
            </h2>
            <p className="text-xs text-gray-400 mt-2 max-w-xl">
              Talk directly with senior Next.js specialists. We provide an architectural roadmap, Core Web Vitals audit, and fixed estimate within 24 hours.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-white text-black text-xs uppercase tracking-widest px-8 py-4 font-bold hover:bg-gray-200 transition-colors whitespace-nowrap"
          >
            Start Next.js Project →
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
