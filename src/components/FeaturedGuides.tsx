import React from "react";
import Link from "next/link";

interface FeaturedGuide {
  slug: string;
  category: string;
  title: string;
  description: string;
  readTime: string;
}

export default function FeaturedGuides() {
  const guides: FeaturedGuide[] = [
    {
      slug: "autonomous-ai-agents-langchain-langgraph-guide",
      category: "AI AGENT ENGINEERING",
      title: "Building Production Autonomous AI Agents with LangGraph & Multi-Agent Orchestration",
      description:
        "Technical guide into deterministic multi-agent loops, state graphs, reflection verifiers, and vector memory synchronization.",
      readTime: "18 min read",
    },
    {
      slug: "nextjs-16-turbopack-production-architecture-guide",
      category: "NEXT.JS ARCHITECTURE",
      title: "Next.js 16 & Turbopack Production Architecture: Scaling High-Concurrency Web Apps",
      description:
        "Comprehensive engineering breakdown of Partial Prerendering (PPR), Turbopack compilation, and edge caching for sub-15ms TTFB.",
      readTime: "15 min read",
    },
    {
      slug: "what-are-ai-agents-and-how-do-they-work",
      category: "AI WORKFLOWS",
      title: "What Are AI Agents and How Do They Work? Architecture, ReAct Loops, and Tool Calling",
      description:
        "Deep technical analysis of agentic architectures, state machines, tool access, and autonomous task execution patterns.",
      readTime: "12 min read",
    },
    {
      slug: "how-to-build-a-rag-application",
      category: "VECTOR SEARCH & RAG",
      title: "How to Build a Production RAG Application: Ingestion, Chunking, Embeddings & Reranking",
      description:
        "Architecting enterprise RAG systems with hybrid sparse-dense retrieval, semantic chunking, and sub-200ms latency.",
      readTime: "15 min read",
    },
    {
      slug: "software-development-cost-comparisons",
      category: "GLOBAL ECONOMICS",
      title: "Software Development Cost Comparisons: India vs US, UK & Eastern Europe Engineering Rates",
      description:
        "Empirical hourly rate benchmarks ($30–$65/hr India vs $140–$250/hr US), sprint allocations, and TCO by software archetype.",
      readTime: "12 min read",
    },
    {
      slug: "nextjs-vs-react-for-production-applications",
      category: "FRONTEND STRATEGY",
      title: "Next.js vs React for Production Applications: SSR, Static Generation, SEO & Performance",
      description:
        "Engineering comparison of client-rendered SPAs vs server-rendered Next.js App Router for high-scale enterprise applications.",
      readTime: "12 min read",
    },
  ];

  return (
    <section className="border-b border-black bg-white font-mono py-14 sm:py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-6 border-b border-black gap-4">
          <div>
            <div className="text-xs uppercase tracking-wider sm:tracking-widest text-gray-500 mb-2 font-bold">
              // Technical Insights & Architecture Guides
            </div>
            <h2
              className="font-display text-[clamp(1.75rem,5vw,4rem)] font-bold leading-tight"
              style={{ fontWeight: 800 }}
            >
              FEATURED ENGINEERING GUIDES
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-xs font-bold uppercase tracking-wider bg-black text-white px-5 py-3 border border-black hover:bg-gray-800 transition-colors whitespace-nowrap self-start sm:self-auto"
          >
            Explore All 25 Guides →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide) => (
            <article
              key={guide.slug}
              className="p-6 border border-black bg-gray-50 flex flex-col justify-between group hover:bg-black hover:text-white transition-colors duration-200"
            >
              <div>
                <div className="flex justify-between items-center mb-3 text-[11px]">
                  <span className="bg-black text-white group-hover:bg-white group-hover:text-black px-2 py-0.5 font-bold uppercase tracking-wider transition-colors">
                    {guide.category}
                  </span>
                  <span className="text-gray-500 group-hover:text-gray-400 font-mono">
                    {guide.readTime}
                  </span>
                </div>
                <h3 className="font-display text-base sm:text-lg font-bold mb-3 leading-snug group-hover:text-white">
                  <Link href={`/blog/${guide.slug}`} className="hover:underline">
                    {guide.title}
                  </Link>
                </h3>
                <p className="text-xs text-gray-600 group-hover:text-gray-300 leading-relaxed mb-6">
                  {guide.description}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200 group-hover:border-gray-800 flex justify-between items-center text-xs">
                <span className="text-[11px] font-mono text-gray-400">CookMyTech Studio</span>
                <Link
                  href={`/blog/${guide.slug}`}
                  className="font-bold uppercase tracking-wider underline group-hover:text-white"
                >
                  Read Guide →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
