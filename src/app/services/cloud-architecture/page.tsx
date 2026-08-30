import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { constructMetadata } from "@/lib/metadata";
import { generateServiceSchema, generateFaqSchema } from "@/lib/schema";

export const metadata = constructMetadata({
  title: "Cloud Architecture & DevOps Services | AWS & GCP Systems",
  description:
    "CookMyTech designs resilient cloud architecture, Docker containerization, Kubernetes orchestration, and automated CI/CD deployment pipelines on AWS and GCP.",
  path: "/services/cloud-architecture",
  keywords: [
    "cloud architecture services",
    "DevOps engineering studio",
    "AWS cloud architecture",
    "Kubernetes engineering",
    "Docker containerization",
  ],
});

export default function CloudArchitecturePage() {
  const serviceUrl = "https://www.cookmytech.site/services/cloud-architecture";
  const serviceSchema = generateServiceSchema({
    name: "Cloud Architecture Services",
    description: "Cloud infrastructure design, Docker containerization, Kubernetes cluster orchestration, and automated DevOps deployment pipelines.",
    url: serviceUrl,
    serviceType: "Cloud Systems & DevOps Engineering",
  });

  const faqs = [
    {
      question: "Which cloud providers do you design infrastructure for?",
      answer:
        "We specialize in AWS (ECS, EKS, Lambda, RDS, S3), Google Cloud (GCP, Cloud Run, GKE), Vercel, Railway, and Hetzner for bare-metal cost efficiency.",
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
            { name: "Cloud Architecture", item: "/services/cloud-architecture" },
          ]}
        />

        <section className="py-12 border-b border-black">
          <div className="text-xs uppercase tracking-widest bg-black text-white px-3 py-1 font-bold inline-block mb-4">
            Cloud Systems Studio
          </div>
          <h1 className="font-display text-[clamp(2.2rem,5vw,4.5rem)] font-bold leading-none uppercase mb-6" style={{ fontWeight: 800 }}>
            Cloud Architecture & DevOps Services
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-gray-700 max-w-3xl mb-8">
            Engineered cloud infrastructure built for high concurrency and zero downtime. We design containerized microservices, infrastructure as code (Terraform), and automated CI/CD pipelines.
          </p>
          <Link href="/contact" className="bg-black text-white text-xs uppercase tracking-widest px-8 py-4 border border-black hover:bg-white hover:text-black transition-colors font-bold inline-block">
            Consult Cloud Architects →
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
            <h2 className="font-display text-xl font-bold uppercase">Ready to Scale Your Cloud Systems?</h2>
            <p className="text-xs text-gray-400 mt-1">Get an infrastructure audit and technical plan within 24 hours.</p>
          </div>
          <Link href="/contact" className="bg-white text-black text-xs uppercase tracking-widest px-8 py-3.5 font-bold hover:bg-gray-200 transition-colors whitespace-nowrap">
            Contact Architecture Team →
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
