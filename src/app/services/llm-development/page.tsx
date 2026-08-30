import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { constructMetadata } from "@/lib/metadata";
import { generateServiceSchema, generateFaqSchema } from "@/lib/schema";

export const metadata = constructMetadata({
  title: "LLM Application Development Company | Custom LLM Engineering",
  description:
    "CookMyTech specializes in custom LLM application development, OpenAI/Claude API integrations, fine-tuning pipelines, and structured prompt engineering.",
  path: "/services/llm-development",
  keywords: [
    "LLM development company",
    "LLM application development",
    "custom LLM application",
    "OpenAI development company",
    "GPT application development",
  ],
});

export default function LlmDevelopmentPage() {
  const serviceUrl = "https://www.cookmytech.site/services/llm-development";
  const serviceSchema = generateServiceSchema({
    name: "LLM Application Development Services",
    description: "Custom Large Language Model application development, API integration, prompt architecture, and model fine-tuning.",
    url: serviceUrl,
    serviceType: "Large Language Model Engineering",
  });

  const faqs = [
    {
      question: "Which LLM providers and models do you work with?",
      answer:
        "We engineer with OpenAI (GPT-4o, GPT-4o-mini), Anthropic Claude 3.5, Meta Llama 3, Mistral, Google Gemini, and open-source models deployed via vLLM or Ollama.",
    },
    {
      question: "How do you prevent hallucinations in commercial LLM apps?",
      answer:
        "We implement strict JSON schema validation (Zod/Pydantic), ground truth verification with RAG, system prompt guardrails, and automated evaluation suites.",
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
            { name: "LLM Development", item: "/services/llm-development" },
          ]}
        />

        <section className="py-12 border-b border-black">
          <div className="text-xs uppercase tracking-widest bg-black text-white px-3 py-1 font-bold inline-block mb-4">
            LLM Engineering Studio
          </div>
          <h1 className="font-display text-[clamp(2.2rem,5vw,4.5rem)] font-bold leading-none uppercase mb-6" style={{ fontWeight: 800 }}>
            Custom LLM Application Development
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-gray-700 max-w-3xl mb-8">
            Harness the power of Large Language Models. We engineer production-ready LLM applications featuring structured data outputs, prompt management, function calling, and multi-model failover strategies.
          </p>
          <Link href="/contact" className="bg-black text-white text-xs uppercase tracking-widest px-8 py-4 border border-black hover:bg-white hover:text-black transition-colors font-bold inline-block">
            Consult LLM Developers →
          </Link>
        </section>

        <section className="py-16 border-b border-black grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border border-black bg-white">
            <h3 className="font-display text-lg font-bold mb-2 uppercase">Custom Chatbots</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Enterprise customer support and internal chatbots trained on proprietary company knowledge bases.
            </p>
          </div>
          <div className="p-6 border border-black bg-white">
            <h3 className="font-display text-lg font-bold mb-2 uppercase">Structured Extraction</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Extract tabular data, JSON, and entities from unstructured invoices, PDFs, and legal contracts.
            </p>
          </div>
          <div className="p-6 border border-black bg-white">
            <h3 className="font-display text-lg font-bold mb-2 uppercase">Model Fine-Tuning</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Custom LoRA fine-tuning for domain-specific vocabulary, privacy compliance, and latency requirements.
            </p>
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
            <h2 className="font-display text-xl font-bold uppercase">Build Production LLM Apps</h2>
            <p className="text-xs text-gray-400 mt-1">Talk to our senior LLM engineers today.</p>
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
