import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Technical Engineering Guides & AI Architecture Insights",
  description:
    "In-depth technical guides on AI development costs, SaaS architecture, RAG systems, AI agent workflows, MERN stack vs Next.js, and custom software engineering.",
  path: "/blog",
  keywords: [
    "AI software development cost",
    "AI SaaS cost guide",
    "RAG architecture explained",
    "AI agent vs traditional automation",
    "MERN vs Next.js",
  ],
});

export interface BlogPostItem {
  slug: string;
  category: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
}

export const blogPostsData: BlogPostItem[] = [
  {
    slug: "ai-software-development-cost-guide",
    category: "AI ENGINEERING",
    title: "How Much Does AI Software Development Cost in 2026?",
    description:
      "A realistic technical breakdown of AI development costs, API token overhead, vector database hosting, model fine-tuning, and sprint scoping for startups.",
    date: "2026-08-20",
    readTime: "7 min read",
  },
  {
    slug: "how-to-build-an-ai-saas-product",
    category: "SAAS ARCHITECTURE",
    title: "How to Build an AI SaaS Product: Architecture & Token Margins",
    description:
      "Step-by-step guide to engineering a multi-tenant AI SaaS application with Stripe billing, semantic caching, rate limiting, and margin protection.",
    date: "2026-08-15",
    readTime: "9 min read",
  },
  {
    slug: "ai-agent-vs-traditional-automation",
    category: "AUTONOMOUS SYSTEMS",
    title: "AI Agent Architecture vs Traditional Workflow Automation",
    description:
      "Comparing rigid deterministic rule automation (Zapier/Make) with autonomous LLM agents capable of tool calling, planning, and self-verification.",
    date: "2026-08-10",
    readTime: "6 min read",
  },
  {
    slug: "enterprise-rag-architecture-explained",
    category: "VECTOR SEARCH",
    title: "Enterprise RAG Architecture Explained: Embeddings to Production",
    description:
      "How to build high-accuracy Retrieval-Augmented Generation systems with sub-100ms vector search, hybrid retrieval, reranking, and citation guarantees.",
    date: "2026-08-05",
    readTime: "10 min read",
  },
  {
    slug: "mern-stack-vs-nextjs-for-saas",
    category: "STACK COMPARISON",
    title: "MERN Stack vs Next.js App Router for Production SaaS",
    description:
      "An engineering comparison of traditional client-rendered MERN stack vs server-rendered Next.js for web application speed, SEO, and developer velocity.",
    date: "2026-07-28",
    readTime: "8 min read",
  },
  {
    slug: "custom-ai-software-vs-off-the-shelf-tools",
    category: "STRATEGY",
    title: "Custom AI Software vs Off-the-Shelf AI Tools: Buyer's Guide",
    description:
      "When should companies build custom proprietary AI software versus using SaaS AI tools? Exploring security, data privacy, IP, and ROI.",
    date: "2026-07-20",
    readTime: "6 min read",
  },
];

export default function BlogHubPage() {
  return (
    <div className="bg-white text-black min-h-screen font-mono flex flex-col">
      <Navbar />
      <main id="main-content" className="flex-1 max-w-screen-xl mx-auto px-6 py-16 w-full">
        <Breadcrumbs items={[{ name: "Home", item: "/" }, { name: "Technical Guides", item: "/blog" }]} />

        <div className="py-12 border-b border-black">
          <div className="text-xs uppercase tracking-widest text-gray-500 mb-4 font-bold">
            Technical Knowledge Hub
          </div>
          <h1 className="font-display text-[clamp(2.2rem,6vw,5rem)] font-bold leading-none uppercase mb-6" style={{ fontWeight: 800 }}>
            ENGINEERING GUIDES & ARTICLES
          </h1>
          <p className="text-sm leading-relaxed text-gray-700 max-w-3xl">
            In-depth technical guides written by senior software engineers for founders, CTOs, and product managers building AI, SaaS, and full-stack software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
          {blogPostsData.map((post) => (
            <article
              key={post.slug}
              className="p-8 border border-black bg-gray-50 flex flex-col justify-between group hover:bg-black hover:text-white transition-colors duration-200"
            >
              <div>
                <div className="flex justify-between items-center mb-4 text-xs">
                  <span className="bg-black text-white group-hover:bg-white group-hover:text-black px-2.5 py-0.5 font-bold uppercase transition-colors">
                    {post.category}
                  </span>
                  <span className="text-gray-500 group-hover:text-gray-400 font-mono">
                    {post.readTime}
                  </span>
                </div>
                <h2 className="font-display text-xl font-bold mb-3 leading-tight group-hover:text-white">
                  <Link href={`/blog/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-xs text-gray-600 group-hover:text-gray-300 leading-relaxed mb-6">
                  {post.description}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200 group-hover:border-gray-800 flex justify-between items-center text-xs">
                <span className="text-gray-400 font-mono">{post.date}</span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-bold uppercase tracking-widest group-hover:text-white underline"
                >
                  Read Article →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="bg-black text-white p-8 border border-black flex flex-col md:flex-row items-center justify-between gap-6 mt-6">
          <div>
            <h2 className="font-display text-xl font-bold uppercase">Have Questions About Your Software Architecture?</h2>
            <p className="text-xs text-gray-400 mt-1">Consult directly with our senior software engineers.</p>
          </div>
          <Link href="/contact" className="bg-white text-black text-xs uppercase tracking-widest px-8 py-3.5 font-bold hover:bg-gray-200 transition-colors whitespace-nowrap">
            Schedule Technical Call →
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
