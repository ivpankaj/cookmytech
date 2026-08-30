import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { constructMetadata } from "@/lib/metadata";
import { generateServiceSchema, generateFaqSchema } from "@/lib/schema";

export const metadata = constructMetadata({
  title: "RAG Development Company | Retrieval Augmented Generation Services",
  description:
    "CookMyTech provides enterprise RAG development services. We build high-accuracy retrieval augmented generation applications, vector search indexes, and document Q&A pipelines.",
  path: "/services/rag-development",
  keywords: [
    "RAG development company",
    "RAG application development",
    "retrieval augmented generation",
    "enterprise RAG development",
    "vector database development",
  ],
});

export default function RagDevelopmentPage() {
  const serviceUrl = "https://www.cookmytech.site/services/rag-development";
  const serviceSchema = generateServiceSchema({
    name: "RAG Development Services",
    description: "Enterprise Retrieval-Augmented Generation, vector embedding pipelines, hybrid search, and semantic knowledge retrieval systems.",
    url: serviceUrl,
    serviceType: "RAG & Knowledge Graph Engineering",
  });

  const faqs = [
    {
      question: "What is Retrieval-Augmented Generation (RAG) and why do enterprise companies need it?",
      answer:
        "RAG connects LLMs directly to your private enterprise data (PDFs, SQL databases, Notion, Slack, internal codebases) so the AI provides accurate, hallucination-free answers with exact citations.",
    },
    {
      question: "Which vector databases do you use for enterprise RAG?",
      answer:
        "We utilize Pinecone, Qdrant, Weaviate, Milvus, and pgvector depending on compliance, latency, and hosting requirements.",
    },
  ];

  const faqSchema = generateFaqSchema(faqs);

  return (
    <div className="bg-white text-black min-h-screen font-mono flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main id="main-content" className="flex-1 max-w-screen-xl mx-auto px-6 py-16 w-full">
        <Breadcrumbs
          items={[
            { name: "Home", item: "/" },
            { name: "Services", item: "/services" },
            { name: "RAG Development", item: "/services/rag-development" },
          ]}
        />

        <section className="py-12 border-b border-black">
          <div className="text-xs uppercase tracking-widest bg-black text-white px-3 py-1 font-bold inline-block mb-4">
            Vector & RAG Engineering
          </div>
          <h1 className="font-display text-[clamp(2.2rem,5vw,4.5rem)] font-bold leading-none uppercase mb-6" style={{ fontWeight: 800 }}>
            Enterprise RAG Development Services
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-gray-700 max-w-3xl mb-8">
            Unlock your organization's internal knowledge. We build high-throughput Retrieval-Augmented Generation (RAG) pipelines with sub-100ms vector search, multi-modal ingestion, and verifiable citations.
          </p>
          <Link href="/contact" className="bg-black text-white text-xs uppercase tracking-widest px-8 py-4 border border-black hover:bg-white hover:text-black transition-colors font-bold inline-block">
            Build RAG Architecture →
          </Link>
        </section>

        <section className="py-16 border-b border-black grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 border border-black bg-gray-50">
            <h2 className="font-display text-2xl font-bold uppercase mb-4">Production RAG Architecture</h2>
            <ul className="space-y-3 text-xs text-gray-700">
              <li>• Advanced Chunking & Metadata Filtering</li>
              <li>• Hybrid Vector + Full-Text BM25 Search</li>
              <li>• Reranking Pipelines (Cohere Rerank / BGE)</li>
              <li>• Automated Vector Index Synchronization</li>
            </ul>
          </div>
          <div className="p-8 border border-black bg-white">
            <h2 className="font-display text-2xl font-bold uppercase mb-4">Zero Hallucination Guarantee</h2>
            <p className="text-xs text-gray-700 leading-relaxed mb-4">
              Our RAG pipelines enforce strict citation constraints so every AI response references the exact document page, sentence, or database ID used during generation.
            </p>
            <Link href="/services/llm-development" className="text-xs font-bold underline">
              LLM Development Services →
            </Link>
          </div>
        </section>

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

        <div className="bg-black text-white p-8 border border-black flex flex-col md:flex-row items-center justify-between gap-6 mt-12">
          <div>
            <h2 className="font-display text-xl font-bold uppercase">Ready to Build Enterprise RAG?</h2>
            <p className="text-xs text-gray-400 mt-1">Talk directly with our RAG engineers today.</p>
          </div>
          <Link href="/contact" className="bg-white text-black text-xs uppercase tracking-widest px-8 py-3.5 font-bold hover:bg-gray-200 transition-colors whitespace-nowrap">
            Contact Us →
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
