import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Case Studies & Production Builds Showcase",
  description:
    "Explore real-world software engineering case studies from CookMyTech: enterprise RAG agent pipelines, high-load e-commerce cores, payment routing engines, and streaming analytics.",
  path: "/case-studies",
  keywords: [
    "software case studies",
    "AI project case study",
    "full-stack software case study",
    "CookMyTech production builds",
  ],
});

export interface CaseStudyItem {
  slug: string;
  category: string;
  title: string;
  description: string;
  metrics: { label: string; value: string }[];
  tags: string[];
}

export const caseStudiesData: CaseStudyItem[] = [
  {
    slug: "enterprise-rag-agent-pipeline",
    category: "AI & LLM AGENTS",
    title: "Enterprise RAG & Agent Pipeline",
    description:
      "Engineered a multi-modal RAG architecture handling 2M+ vector embeddings with sub-100ms retrieval latency and automated fallback routing.",
    metrics: [
      { label: "Retrieval Latency", value: "<85ms" },
      { label: "Daily Vector Queries", value: "1.2M+" },
      { label: "System Uptime", value: "99.99%" },
    ],
    tags: ["OpenAI", "Pinecone", "LangChain", "Python", "Next.js"],
  },
  {
    slug: "realtime-ecommerce-engine",
    category: "HIGH-LOAD SYSTEM",
    title: "Real-time E-Commerce Core",
    description:
      "Re-engineered core checkout and inventory synchronization engine to handle Black Friday surge traffic without a single dropped transaction.",
    metrics: [
      { label: "Peak RPS Capacity", value: "15,000" },
      { label: "Average Checkout Speed", value: "1.2s" },
      { label: "Zero Downtime Rate", value: "100%" },
    ],
    tags: ["Node.js", "Redis", "PostgreSQL", "Docker", "AWS"],
  },
  {
    slug: "global-payment-routing-engine",
    category: "API & INTEGRATIONS",
    title: "Global Payment Routing Engine",
    description:
      "Multi-provider payment orchestration layer with automatic failover, webhooks management, and cryptographic audit logging.",
    metrics: [
      { label: "Volume Processed", value: "$45M+" },
      { label: "Authorization Rate", value: "98.7%" },
      { label: "Integrated Providers", value: "12 Providers" },
    ],
    tags: ["TypeScript", "GraphQL", "OAuth 2.0", "K8s", "GCP"],
  },
  {
    slug: "streaming-event-analytics",
    category: "DATA PIPELINE",
    title: "Streaming Event Analytics",
    description:
      "High-throughput event processing platform aggregating telemetry from 500k active IoT clients in real-time.",
    metrics: [
      { label: "Processed Events/Sec", value: "50,000" },
      { label: "Data Compression", value: "4.2x" },
      { label: "Infrastructure Cost Reduced", value: "40%" },
    ],
    tags: ["Python", "Redis", "Kafka", "PostgreSQL", "Docker"],
  },
];

export default function CaseStudiesHubPage() {
  return (
    <div className="bg-white text-black min-h-screen font-mono flex flex-col">
      <Navbar />
      <main id="main-content" className="flex-1 max-w-screen-xl mx-auto px-6 py-16 w-full">
        <Breadcrumbs items={[{ name: "Home", item: "/" }, { name: "Case Studies", item: "/case-studies" }]} />

        <div className="py-12 border-b border-black">
          <div className="text-xs uppercase tracking-widest text-gray-500 mb-4 font-bold">
            Engineering Case Studies
          </div>
          <h1 className="font-display text-[clamp(2.2rem,6vw,5rem)] font-bold leading-none uppercase mb-6" style={{ fontWeight: 800 }}>
            PRODUCTION BUILDS & CASE STUDIES
          </h1>
          <p className="text-sm leading-relaxed text-gray-700 max-w-3xl">
            In-depth technical breakdowns of production software systems engineered by CookMyTech. Explore how we solve complex data, AI, and scaling challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
          {caseStudiesData.map((project) => (
            <article
              key={project.slug}
              className="p-8 border border-black bg-gray-50 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs bg-black text-white px-3 py-1 font-bold uppercase">
                    {project.category}
                  </span>
                  <Link
                    href={`/case-studies/${project.slug}`}
                    className="text-xs font-bold uppercase underline hover:no-underline"
                  >
                    Read Breakdown →
                  </Link>
                </div>
                <h2 className="font-display text-2xl font-bold mb-4">
                  <Link href={`/case-studies/${project.slug}`} className="hover:underline">
                    {project.title}
                  </Link>
                </h2>
                <p className="text-xs text-gray-700 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* METRICS */}
                <div className="grid grid-cols-3 gap-2 mb-6 text-center">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="p-3 border border-black bg-white">
                      <div className="font-display font-bold text-sm">{m.value}</div>
                      <div className="text-[10px] text-gray-500 uppercase mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[11px] border border-black bg-white px-2.5 py-0.5 uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/case-studies/${project.slug}`}
                  className="block text-center bg-black text-white text-xs uppercase tracking-widest py-3 font-bold hover:bg-gray-800 transition-colors"
                >
                  View Complete Architecture →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-black text-white p-8 border border-black flex flex-col md:flex-row items-center justify-between gap-6 mt-6">
          <div>
            <h2 className="font-display text-xl font-bold uppercase">Have a Complex Technical Challenge?</h2>
            <p className="text-xs text-gray-400 mt-1">Our senior engineering team is ready to build your solution.</p>
          </div>
          <Link href="/contact" className="bg-white text-black text-xs uppercase tracking-widest px-8 py-3.5 font-bold hover:bg-gray-200 transition-colors whitespace-nowrap">
            Discuss Your Project →
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
