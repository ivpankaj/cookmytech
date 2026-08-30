import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { constructMetadata } from "@/lib/metadata";
import { generateServiceSchema, generateFaqSchema } from "@/lib/schema";

export const metadata = constructMetadata({
  title: "MERN Stack Development Company | Custom MongoDB Express React Node",
  description:
    "CookMyTech provides MERN stack development services. We build custom web applications, SaaS platforms, and enterprise solutions using MongoDB, Express, React, and Node.js.",
  path: "/services/mern-stack-development",
  keywords: [
    "MERN stack development company",
    "MERN stack development services",
    "MERN development company",
    "custom MERN application",
    "MongoDB Express React Node development",
  ],
});

export default function MernStackDevelopmentPage() {
  const serviceUrl = "https://www.cookmytech.site/services/mern-stack-development";
  const serviceSchema = generateServiceSchema({
    name: "MERN Stack Development Services",
    description: "Production web applications engineered with MongoDB, Express.js, React, and Node.js.",
    url: serviceUrl,
    serviceType: "MERN Stack Software Engineering",
  });

  const faqs = [
    {
      question: "What is MERN stack development?",
      answer:
        "MERN stack development combines MongoDB (NoSQL database), Express.js (backend web framework), React (frontend library), and Node.js (JavaScript runtime) into a unified JavaScript software architecture.",
    },
    {
      question: "When should I choose MERN stack over traditional relational databases?",
      answer:
        "MERN stack is ideal for applications requiring rapid prototyping, flexible JSON document schemas, real-time data streaming, and unified TypeScript across client and server.",
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
            { name: "MERN Stack Development", item: "/services/mern-stack-development" },
          ]}
        />

        <section className="py-12 border-b border-black">
          <div className="text-xs uppercase tracking-widest bg-black text-white px-3 py-1 font-bold inline-block mb-4">
            MERN Engineering Studio
          </div>
          <h1 className="font-display text-[clamp(2.2rem,5vw,4.5rem)] font-bold leading-none uppercase mb-6" style={{ fontWeight: 800 }}>
            MERN Stack Development Services
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-gray-700 max-w-3xl mb-8">
            High-performance JavaScript software development. We craft production web applications and SaaS platforms powered by MongoDB, Express, React, and Node.js.
          </p>
          <Link href="/contact" className="bg-black text-white text-xs uppercase tracking-widest px-8 py-4 border border-black hover:bg-white hover:text-black transition-colors font-bold inline-block">
            Consult MERN Developers →
          </Link>
        </section>

        <section className="py-16 border-b border-black grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-6 border border-black bg-gray-50 text-center">
            <h3 className="font-display text-xl font-bold mb-1">MongoDB</h3>
            <p className="text-xs text-gray-600">NoSQL Document DB</p>
          </div>
          <div className="p-6 border border-black bg-gray-50 text-center">
            <h3 className="font-display text-xl font-bold mb-1">Express.js</h3>
            <p className="text-xs text-gray-600">Backend API Framework</p>
          </div>
          <div className="p-6 border border-black bg-gray-50 text-center">
            <h3 className="font-display text-xl font-bold mb-1">React</h3>
            <p className="text-xs text-gray-600">Interactive Frontend</p>
          </div>
          <div className="p-6 border border-black bg-gray-50 text-center">
            <h3 className="font-display text-xl font-bold mb-1">Node.js</h3>
            <p className="text-xs text-gray-600">Server Runtime</p>
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
            <h2 className="font-display text-xl font-bold uppercase">Ready to Build a MERN Application?</h2>
            <p className="text-xs text-gray-400 mt-1">Get an engineering proposal and quote within 24 hours.</p>
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
