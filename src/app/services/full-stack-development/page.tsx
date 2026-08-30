import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { constructMetadata } from "@/lib/metadata";
import { generateServiceSchema, generateFaqSchema } from "@/lib/schema";

export const metadata = constructMetadata({
  title: "Full-Stack Development Company | Custom Web Software Engineering",
  description:
    "CookMyTech is a premier full-stack software development company engineering web applications, cloud backends, modern frontend UX, and APIs.",
  path: "/services/full-stack-development",
  keywords: [
    "full stack development company",
    "full stack development services",
    "custom web application development",
    "full stack web development",
    "full stack software development",
  ],
});

export default function FullStackDevelopmentPage() {
  const serviceUrl = "https://www.cookmytech.site/services/full-stack-development";
  const serviceSchema = generateServiceSchema({
    name: "Full-Stack Development Services",
    description: "End-to-end full-stack web application engineering, database design, modern frontends, high-performance backends, and cloud deployment.",
    url: serviceUrl,
    serviceType: "Full-Stack Software Engineering",
  });

  const faqs = [
    {
      question: "What technology stacks do your full-stack engineers specialize in?",
      answer:
        "We specialize in TypeScript, Next.js, React, Node.js, Express, Python, Go, PostgreSQL, Redis, MongoDB, GraphQL, and AWS/GCP cloud infrastructure.",
    },
    {
      question: "Do you handle both frontend UX and backend architecture?",
      answer:
        "Yes. We design responsive, accessible user interfaces and pair them with resilient, high-concurrency serverless or containerized backends.",
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
            { name: "Full-Stack Development", item: "/services/full-stack-development" },
          ]}
        />

        <section className="py-12 border-b border-black">
          <div className="text-xs uppercase tracking-widest bg-black text-white px-3 py-1 font-bold inline-block mb-4">
            Full-Stack Engineering Studio
          </div>
          <h1 className="font-display text-[clamp(2.2rem,5vw,4.5rem)] font-bold leading-none uppercase mb-6" style={{ fontWeight: 800 }}>
            Full-Stack Development Services
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-gray-700 max-w-3xl mb-8">
            Complete software engineering from UI component design to database index tuning. We build scalable full-stack web applications engineered for speed, security, and developer maintainability.
          </p>
          <Link href="/contact" className="bg-black text-white text-xs uppercase tracking-widest px-8 py-4 border border-black hover:bg-white hover:text-black transition-colors font-bold inline-block">
            Hire Full-Stack Team →
          </Link>
        </section>

        <section className="py-16 border-b border-black grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 border border-black bg-gray-50">
            <h2 className="font-display text-2xl font-bold uppercase mb-4">Frontend Excellence</h2>
            <p className="text-xs text-gray-700 leading-relaxed mb-4">
              Lightning-fast React & Next.js user interfaces built with TypeScript, strict type safety, responsive CSS, and optimal Core Web Vitals performance.
            </p>
            <Link href="/services/nextjs-development" className="text-xs font-bold underline">
              Next.js Services →
            </Link>
          </div>
          <div className="p-8 border border-black bg-white">
            <h2 className="font-display text-2xl font-bold uppercase mb-4">Resilient Backend Architecture</h2>
            <p className="text-xs text-gray-700 leading-relaxed mb-4">
              Node.js, Express, Python, and Go microservices paired with PostgreSQL, Redis caching, connection pooling, and automated testing.
            </p>
            <Link href="/services/nodejs-development" className="text-xs font-bold underline">
              Node.js Services →
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
            <h2 className="font-display text-xl font-bold uppercase">Ready to Build Full-Stack Software?</h2>
            <p className="text-xs text-gray-400 mt-1">Get an architecture overview and fixed-scope estimate within 24 hours.</p>
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
