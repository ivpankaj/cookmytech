import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { constructMetadata } from "@/lib/metadata";
import { generateLocalBusinessSchema, generateFaqSchema } from "@/lib/schema";

export const metadata = constructMetadata({
  title: "AI & Software Development Company in Noida | CookMyTech",
  description:
    "CookMyTech is a premier AI & custom software development company in Noida. We build production web applications, autonomous AI agents, enterprise RAG, and SaaS software for businesses in Noida and Delhi NCR.",
  path: "/locations/noida",
  keywords: [
    "AI development company in Noida",
    "software development company in Noida",
    "custom software development company Noida",
    "AI software company Noida",
    "web development company Noida",
    "hire AI developers in Noida",
    "IT company Sector 62 Noida",
  ],
});

export default function NoidaLocationPage() {
  const pageUrl = "https://www.cookmytech.com/locations/noida";
  const localSchema = generateLocalBusinessSchema({
    locationName: "Noida Software & AI Studio",
    description:
      "CookMyTech delivers custom software development, artificial intelligence engineering, enterprise RAG systems, and Next.js applications in Noida, Uttar Pradesh.",
    url: pageUrl,
    locality: "Noida",
    region: "Uttar Pradesh",
    postalCode: "201301",
    country: "IN",
  });

  const faqs = [
    {
      question: "Why choose CookMyTech as your software and AI development partner in Noida?",
      answer:
        "CookMyTech operates as a specialized engineering studio led by senior architects, eliminating junior developer overhead and account layers. We provide direct communication, in-person discovery meetings across Noida and Delhi NCR, guaranteed 48-hour first code commit SLA, and 100% intellectual property ownership.",
    },
    {
      question: "Can we schedule an in-person technical discovery meeting in Noida?",
      answer:
        "Yes. Our engineering leadership conducts in-person technical discovery sessions, codebase audits, and roadmap planning meetings across Noida (Sector 62, Sector 125, Sector 132, Noida Expressway corridor) and the wider Delhi NCR region.",
    },
    {
      question: "What core software and AI technologies does CookMyTech engineer in Noida?",
      answer:
        "Our team specializes in Next.js 16, React, TypeScript, Python FastAPI, Node.js, PostgreSQL, OpenAI GPT-4o, Claude 3.5, LangChain, Pinecone vector search, Docker, AWS, and GCP cloud architectures.",
    },
    {
      question: "How do you handle client confidentiality and codebase security?",
      answer:
        "We sign mutual Non-Disclosure Agreements (NDAs) prior to project review. All codebases are developed within private client repositories, and all cloud resources and API keys remain in your direct ownership.",
    },
  ];

  const faqSchema = generateFaqSchema(faqs);

  return (
    <div className="bg-white text-black min-h-screen font-mono flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
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
            { name: "Locations", item: "/locations" },
            { name: "Noida", item: "/locations/noida" },
          ]}
        />

        {/* HERO SECTION */}
        <section className="py-12 border-b border-black">
          <div className="text-xs uppercase tracking-widest bg-black text-white px-3 py-1 font-bold inline-block mb-4">
            Noida & Delhi NCR Engineering Hub
          </div>
          <h1
            className="font-display text-[clamp(2.2rem,5vw,4.5rem)] font-bold leading-none uppercase mb-6"
            style={{ fontWeight: 800 }}
          >
            AI & Software Development Company in Noida
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-gray-700 max-w-3xl mb-8">
            Engineered software solutions for ambitious businesses in Noida, the Expressway tech corridor, and Delhi NCR. CookMyTech designs, architects, and builds custom AI software, autonomous AI agents, enterprise RAG pipelines, and high-concurrency web applications with senior developer execution.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-black text-white text-xs uppercase tracking-widest px-8 py-4 border border-black hover:bg-white hover:text-black transition-colors font-bold inline-block"
            >
              Schedule Noida Technical Consultation →
            </Link>
            <a
              href="tel:+918929517046"
              className="bg-white text-black text-xs uppercase tracking-widest px-8 py-4 border border-black hover:bg-gray-100 transition-colors font-bold inline-block"
            >
              Direct Call: +91 89295 17046
            </a>
          </div>
        </section>

        {/* REGIONAL ADVANTAGES */}
        <section className="py-16 border-b border-black grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 border border-black bg-gray-50">
            <h2 className="font-display text-xl font-bold uppercase mb-4">Local Collaboration & Agile Sprints</h2>
            <p className="text-xs text-gray-700 leading-relaxed">
              Fast, face-to-face architectural alignment across Noida tech parks (Sector 62, Sector 125, Sector 135) combined with rapid daily sprint standups and continuous deployment.
            </p>
          </div>

          <div className="p-8 border border-black bg-gray-50">
            <h2 className="font-display text-xl font-bold uppercase mb-4">AI-Native Engineering Specialization</h2>
            <p className="text-xs text-gray-700 leading-relaxed">
              We go beyond conventional website building. We architect autonomous multi-agent systems, internal vector search engines, and intelligent LLM-driven workflows that transform operations.
            </p>
          </div>

          <div className="p-8 border border-black bg-gray-50">
            <h2 className="font-display text-xl font-bold uppercase mb-4">100% IP & Codebase Ownership</h2>
            <p className="text-xs text-gray-700 leading-relaxed">
              Zero vendor lock-in. You own every Git commit, Docker file, cloud credential, and database schema from day one, backed by strict contractual guarantees.
            </p>
          </div>
        </section>

        {/* SERVICES OFFERED IN NOIDA */}
        <section className="py-16 border-b border-black">
          <h2 className="font-display text-2xl font-bold uppercase mb-8">
            // Core Services Engineered for Noida Businesses
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs">
            <div className="border border-black p-6 bg-white hover:border-black transition-colors">
              <h3 className="font-bold text-base mb-2">
                <Link href="/services/ai-software-development" className="hover:underline">
                  Custom AI Software Development →
                </Link>
              </h3>
              <p className="text-gray-600 mb-3">
                Tailored AI solutions, machine learning models, and automated inference pipelines designed for enterprise business workflows.
              </p>
              <Link href="/services/ai-software-development" className="font-bold underline text-black">
                Learn more
              </Link>
            </div>

            <div className="border border-black p-6 bg-white hover:border-black transition-colors">
              <h3 className="font-bold text-base mb-2">
                <Link href="/services/custom-software-development" className="hover:underline">
                  Custom Software Development →
                </Link>
              </h3>
              <p className="text-gray-600 mb-3">
                Modern business applications, internal management portals, and cloud microservices engineered for high concurrency and zero downtime.
              </p>
              <Link href="/services/custom-software-development" className="font-bold underline text-black">
                Learn more
              </Link>
            </div>

            <div className="border border-black p-6 bg-white hover:border-black transition-colors">
              <h3 className="font-bold text-base mb-2">
                <Link href="/services/ai-agent-development" className="hover:underline">
                  Autonomous AI Agents →
                </Link>
              </h3>
              <p className="text-gray-600 mb-3">
                Multi-agent orchestration, automated customer resolution bots, and LangGraph-powered deterministic tool calling.
              </p>
              <Link href="/services/ai-agent-development" className="font-bold underline text-black">
                Learn more
              </Link>
            </div>

            <div className="border border-black p-6 bg-white hover:border-black transition-colors">
              <h3 className="font-bold text-base mb-2">
                <Link href="/services/nextjs-development" className="hover:underline">
                  Next.js & Web App Engineering →
                </Link>
              </h3>
              <p className="text-gray-600 mb-3">
                High-speed React and Next.js App Router applications optimized for Google Core Web Vitals, sub-100ms TTFB, and SEO supremacy.
              </p>
              <Link href="/services/nextjs-development" className="font-bold underline text-black">
                Learn more
              </Link>
            </div>

            <div className="border border-black p-6 bg-white hover:border-black transition-colors">
              <h3 className="font-bold text-base mb-2">
                <Link href="/services/saas-development" className="hover:underline">
                  SaaS Product Development →
                </Link>
              </h3>
              <p className="text-gray-600 mb-3">
                Multi-tenant architecture, Stripe billing integrations, role-based security, and cloud scalability for tech founders in Noida.
              </p>
              <Link href="/services/saas-development" className="font-bold underline text-black">
                Learn more
              </Link>
            </div>

            <div className="border border-black p-6 bg-white hover:border-black transition-colors">
              <h3 className="font-bold text-base mb-2">
                <Link href="/services/rag-development" className="hover:underline">
                  Enterprise RAG Systems →
                </Link>
              </h3>
              <p className="text-gray-600 mb-3">
                Private knowledge base search over PDFs, manuals, and databases with sub-85ms vector indexing and hallucination controls.
              </p>
              <Link href="/services/rag-development" className="font-bold underline text-black">
                Learn more
              </Link>
            </div>
          </div>
        </section>

        {/* LOCAL REACH DETAILS */}
        <section className="py-16 border-b border-black grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5 border border-black p-6 bg-gray-50">
            <h2 className="font-display text-xl font-bold uppercase mb-4">// Direct Noida Contact</h2>
            <div className="space-y-3 text-xs text-gray-700">
              <p>
                <strong className="text-black">Operating Base:</strong> Sector 62 & Electronic City Corridor, Noida, Uttar Pradesh 201301, India.
              </p>
              <p>
                <strong className="text-black">Direct Phone / WhatsApp:</strong>{" "}
                <a href="tel:+918929517046" className="font-bold underline text-black">
                  +91 89295 17046
                </a>
              </p>
              <p>
                <strong className="text-black">Official Email:</strong>{" "}
                <a href="mailto:hello@cookmytech.com" className="font-bold underline text-black">
                  hello@cookmytech.com
                </a>
              </p>
              <p>
                <strong className="text-black">Consultation Hours:</strong> Monday – Saturday, 09:00 AM – 08:00 PM IST
              </p>
            </div>
          </div>

          <div className="md:col-span-7 space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed">
            <h2 className="font-display text-xl font-bold uppercase text-black">
              Serving Startups & Enterprises Across Noida & Greater Noida
            </h2>
            <p>
              Noida has emerged as one of India&apos;s most vital technological corridors, hosting prominent IT campuses, multinational development centers, and fast-growing tech startups. As software engineering demands evolve toward AI-integrated architectures, businesses in Noida require development partners who understand both modern web scalability and cutting-edge machine learning pipelines.
            </p>
            <p>
              At CookMyTech, our senior engineering studio works side-by-side with Noida leadership teams. We design bulletproof architecture specifications, eliminate technical debt before it starts, and deliver first code commits in under 48 hours.
            </p>
          </div>
        </section>

        {/* FAQS */}
        <section className="py-16 border-b border-black">
          <h2 className="font-display text-2xl font-bold uppercase mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-3xl">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-b border-gray-200 pb-4">
                <h3 className="font-display text-lg font-bold mb-2">{faq.question}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA BANNER */}
        <div className="bg-black text-white p-8 border border-black flex flex-col md:flex-row items-center justify-between gap-6 mt-12">
          <div>
            <h2 className="font-display text-xl font-bold uppercase">Ready to Start Your Project in Noida?</h2>
            <p className="text-xs text-gray-400 mt-1">Get an actionable technical specification and proposal within 24 hours.</p>
          </div>
          <Link
            href="/contact"
            className="bg-white text-black text-xs uppercase tracking-widest px-8 py-3.5 font-bold hover:bg-gray-200 transition-colors whitespace-nowrap"
          >
            Start Project Consultation →
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
