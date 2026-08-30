import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { constructMetadata } from "@/lib/metadata";
import { generateServiceSchema, generateFaqSchema } from "@/lib/schema";

export const metadata = constructMetadata({
  title: "Web Application Development Company | Enterprise Web Apps",
  description:
    "CookMyTech is a web application development company engineering high-performance web applications, progressive web apps, and enterprise cloud solutions.",
  path: "/services/web-application-development",
  keywords: [
    "web application development company",
    "custom web application development",
    "web application development services",
    "enterprise web applications",
  ],
});

export default function WebApplicationDevelopmentPage() {
  const serviceUrl = "https://www.cookmytech.site/services/web-application-development";
  const serviceSchema = generateServiceSchema({
    name: "Web Application Development Services",
    description: "Production web application engineering, modern UI/UX execution, database optimization, and high availability.",
    url: serviceUrl,
    serviceType: "Web Software Development",
  });

  const faqs = [
    {
      question: "How do you ensure high performance and mobile responsiveness for web applications?",
      answer:
        "We build mobile-first with Tailwind CSS, React, and Next.js, optimizing server-side rendering, asset compression, image lazy loading, and caching for sub-second page loads globally.",
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
            { name: "Web Application Development", item: "/services/web-application-development" },
          ]}
        />

        <section className="py-12 border-b border-black">
          <div className="text-xs uppercase tracking-widest bg-black text-white px-3 py-1 font-bold inline-block mb-4">
            Web App Studio
          </div>
          <h1 className="font-display text-[clamp(2.2rem,5vw,4.5rem)] font-bold leading-none uppercase mb-6" style={{ fontWeight: 800 }}>
            Web Application Development Services
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-gray-700 max-w-3xl mb-8">
            High-availability web applications built for real traffic and zero downtime. We engineer cloud-native web apps with modern frontend UX, secure authentication, and resilient backends.
          </p>
          <Link href="/contact" className="bg-black text-white text-xs uppercase tracking-widest px-8 py-4 border border-black hover:bg-white hover:text-black transition-colors font-bold inline-block">
            Start Web App Project →
          </Link>
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
            <h2 className="font-display text-xl font-bold uppercase">Ready to Build a Web Application?</h2>
            <p className="text-xs text-gray-400 mt-1">Get an technical specification and fixed quote within 24 hours.</p>
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
