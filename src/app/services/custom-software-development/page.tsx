import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { constructMetadata } from "@/lib/metadata";
import { generateServiceSchema, generateFaqSchema } from "@/lib/schema";

export const metadata = constructMetadata({
  title: "Custom Software Development Company | Bespoke Business Systems",
  description:
    "CookMyTech is a custom software development company engineering bespoke business software, enterprise web applications, and tailored software solutions.",
  path: "/services/custom-software-development",
  keywords: [
    "custom software development company",
    "custom software development services",
    "software development company",
    "bespoke software development",
    "business software development",
  ],
});

export default function CustomSoftwareDevelopmentPage() {
  const serviceUrl = "https://www.cookmytech.site/services/custom-software-development";
  const serviceSchema = generateServiceSchema({
    name: "Custom Software Development Services",
    description: "Bespoke software development for complex business requirements, legacy modernization, and tailored cloud systems.",
    url: serviceUrl,
    serviceType: "Custom Software Engineering",
  });

  const faqs = [
    {
      question: "Why choose custom software development over off-the-shelf software?",
      answer:
        "Off-the-shelf software forces your business processes into generic molds. Custom software is engineered around your exact operations, giving you a competitive edge, 100% IP ownership, and zero monthly SaaS seat licensing fees.",
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
            { name: "Custom Software Development", item: "/services/custom-software-development" },
          ]}
        />

        <section className="py-12 border-b border-black">
          <div className="text-xs uppercase tracking-widest bg-black text-white px-3 py-1 font-bold inline-block mb-4">
            Custom Engineering Studio
          </div>
          <h1 className="font-display text-[clamp(2.2rem,5vw,4.5rem)] font-bold leading-none uppercase mb-6" style={{ fontWeight: 800 }}>
            Custom Software Development Services
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-gray-700 max-w-3xl mb-8">
            Tailored software solutions designed around your precise business requirements. We engineer high-load business software, custom internal portals, automated data systems, and cloud architectures.
          </p>
          <Link href="/contact" className="bg-black text-white text-xs uppercase tracking-widest px-8 py-4 border border-black hover:bg-white hover:text-black transition-colors font-bold inline-block">
            Request Software Proposal →
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
            <h2 className="font-display text-xl font-bold uppercase">Ready to Engineer Custom Software?</h2>
            <p className="text-xs text-gray-400 mt-1">Talk to our senior engineering specialists today.</p>
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
