import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { constructMetadata } from "@/lib/metadata";
import { generateServiceSchema, generateFaqSchema } from "@/lib/schema";

export const metadata = constructMetadata({
  title: "AI Web App Development Company | Next.js & React AI Apps",
  description:
    "CookMyTech builds custom AI web applications, intelligent dashboards, real-time AI assistants, and productivity tools using Next.js, React, and LLM integrations.",
  path: "/services/ai-web-app-development",
  keywords: [
    "AI web app development",
    "AI web application development company",
    "AI dashboards",
    "AI assistant development",
    "Next.js AI applications",
  ],
});

export default function AiWebAppDevelopmentPage() {
  const serviceUrl = "https://www.cookmytech.site/services/ai-web-app-development";
  const serviceSchema = generateServiceSchema({
    name: "AI Web Application Development",
    description: "Interactive AI web applications, generative UI, real-time streaming, and intuitive web dashboards powered by AI models.",
    url: serviceUrl,
    serviceType: "Web Application & AI Engineering",
  });

  const faqs = [
    {
      question: "How do you handle real-time streaming AI responses in web applications?",
      answer:
        "We implement Server-Sent Events (SSE) or WebSockets with Next.js App Router edge functions to deliver instant token-by-token streaming UI with zero latency lag.",
    },
    {
      question: "What frontend technologies do you use for AI web applications?",
      answer:
        "We utilize Next.js, React, TypeScript, Tailwind CSS, and Vercel AI SDK to build fast, responsive, and accessible AI web interfaces.",
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
            { name: "AI Web App Development", item: "/services/ai-web-app-development" },
          ]}
        />

        <section className="py-12 border-b border-black">
          <div className="text-xs uppercase tracking-widest bg-black text-white px-3 py-1 font-bold inline-block mb-4">
            AI Web Engineering
          </div>
          <h1 className="font-display text-[clamp(2.2rem,5vw,4.5rem)] font-bold leading-none uppercase mb-6" style={{ fontWeight: 800 }}>
            AI Web App Development Services
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-gray-700 max-w-3xl mb-8">
            Build high-performance web applications powered by artificial intelligence. We blend responsive frontend UX with deep LLM backend integration, real-time response streaming, and robust data pipelines.
          </p>
          <Link href="/contact" className="bg-black text-white text-xs uppercase tracking-widest px-8 py-4 border border-black hover:bg-white hover:text-black transition-colors font-bold inline-block">
            Start Web App Project →
          </Link>
        </section>

        <section className="py-16 border-b border-black grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border border-black bg-gray-50">
            <h3 className="font-display text-lg font-bold mb-2 uppercase">AI Dashboards</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Interactive analytics dashboards with natural language querying, automated chart generation, and real-time insights.
            </p>
          </div>
          <div className="p-6 border border-black bg-gray-50">
            <h3 className="font-display text-lg font-bold mb-2 uppercase">AI Assistants</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Context-aware web copilots that interact with user data, trigger internal webhooks, and complete tasks automatically.
            </p>
          </div>
          <div className="p-6 border border-black bg-gray-50">
            <h3 className="font-display text-lg font-bold mb-2 uppercase">Generative Interfaces</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Dynamic UI components that render content, forms, and tools dynamically based on user prompt interactions.
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
            <h2 className="font-display text-xl font-bold uppercase">Ready to Build Your AI Web App?</h2>
            <p className="text-xs text-gray-400 mt-1">Get an actionable technical specification and fixed quote within 24 hours.</p>
          </div>
          <Link href="/contact" className="bg-white text-black text-xs uppercase tracking-widest px-8 py-3.5 font-bold hover:bg-gray-200 transition-colors whitespace-nowrap">
            Contact Engineering →
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
