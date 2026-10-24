import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { constructMetadata } from "@/lib/metadata";
import { generateArticleSchema } from "@/lib/schema";
import { caseStudiesData, CaseStudyItem } from "../page";

interface Props {
  params: Promise<{ project: string }>;
}

export async function generateStaticParams() {
  return caseStudiesData.map((cs) => ({
    project: cs.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const cs = caseStudiesData.find((item) => item.slug === resolvedParams.project);
  if (!cs) return {};

  return constructMetadata({
    title: `${cs.title} | Production Case Study`,
    description: cs.description,
    path: `/case-studies/${cs.slug}`,
  });
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const cs = caseStudiesData.find((item) => item.slug === resolvedParams.project);

  if (!cs) {
    notFound();
  }

  const caseStudyUrl = `https://www.cookmytech.com/case-studies/${cs.slug}`;
  const caseStudySchema = generateArticleSchema({
    title: `${cs.title} - Production Case Study`,
    description: cs.description,
    url: caseStudyUrl,
    datePublished: "2025-11-15",
    authorName: "CookMyTech Engineering Group",
  });

  const otherCaseStudies = caseStudiesData.filter((item) => item.slug !== cs.slug);

  return (
    <div className="bg-white text-black min-h-screen font-mono flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
      />
      <Navbar />
      <main id="main-content" className="flex-1 max-w-screen-xl mx-auto px-6 py-16 w-full">
        <Breadcrumbs
          items={[
            { name: "Home", item: "/" },
            { name: "Case Studies", item: "/case-studies" },
            { name: cs.title, item: `/case-studies/${cs.slug}` },
          ]}
        />

        <article className="py-12 border-b border-black">
          <div className="text-xs uppercase tracking-widest bg-black text-white px-3 py-1 font-bold inline-block mb-4">
            {cs.category}
          </div>
          <h1 className="font-display text-[clamp(2rem,5vw,4.5rem)] font-bold leading-none uppercase mb-6" style={{ fontWeight: 800 }}>
            {cs.title}
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-gray-700 max-w-3xl mb-8">
            {cs.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {cs.metrics.map((m) => (
              <div key={m.label} className="p-4 border border-black bg-gray-50 text-center">
                <div className="font-display text-2xl font-bold text-black">{m.value}</div>
                <div className="text-xs text-gray-600 uppercase mt-1">{m.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {cs.tags.map((tag) => (
              <span key={tag} className="border border-black bg-gray-100 px-3 py-1 text-xs uppercase font-bold">
                {tag}
              </span>
            ))}
          </div>
        </article>

        {/* DETAILED SECTIONS */}
        <section className="py-16 border-b border-black grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-2xl font-bold uppercase mb-4">01. The Problem</h2>
            <p className="text-xs text-gray-700 leading-relaxed mb-6">
              The client needed an enterprise-grade solution capable of handling high-volume queries with minimal latency, strict data privacy controls, and high availability during peak traffic spikes.
            </p>
            <h2 className="font-display text-2xl font-bold uppercase mb-4">02. Engineering Solution</h2>
            <p className="text-xs text-gray-700 leading-relaxed">
              CookMyTech engineered a modular cloud architecture utilizing async background workers, vector search indexing, connection pooling, and automated fallback routing.
            </p>
          </div>

          <div className="border border-black p-8 bg-gray-50">
            <h2 className="font-display text-2xl font-bold uppercase mb-4">03. Key Technical Challenges</h2>
            <ul className="space-y-3 text-xs text-gray-700">
              <li>✔ Managing high-concurrency event bursts without memory leaks.</li>
              <li>✔ Sub-100ms vector search querying over millions of document vectors.</li>
              <li>✔ Implementing strict cryptographic logging and RBAC permissions.</li>
              <li>✔ Automated CI/CD integration and zero-downtime rolling updates.</li>
            </ul>
          </div>
        </section>

        {/* RELATED PRODUCTION BUILDS CROSS-LINKING */}
        <section className="py-12 border-b border-black">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display text-xl font-bold uppercase">
              // Other Production Case Studies
            </h2>
            <Link
              href="/case-studies"
              className="text-xs uppercase tracking-widest bg-black text-white px-3 py-1 font-bold hover:bg-gray-800 transition-colors"
            >
              All Case Studies →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherCaseStudies.map((other) => (
              <div
                key={other.slug}
                className="p-5 border border-black bg-gray-50 flex flex-col justify-between hover:bg-black hover:text-white transition-colors group"
              >
                <div>
                  <span className="text-[10px] bg-black text-white group-hover:bg-white group-hover:text-black px-2 py-0.5 font-bold uppercase mb-2 inline-block">
                    {other.category}
                  </span>
                  <h3 className="font-display text-base font-bold mb-2">
                    <Link href={`/case-studies/${other.slug}`} className="hover:underline">
                      {other.title}
                    </Link>
                  </h3>
                  <p className="text-xs text-gray-600 group-hover:text-gray-300 line-clamp-3 mb-4">
                    {other.description}
                  </p>
                </div>
                <Link
                  href={`/case-studies/${other.slug}`}
                  className="text-xs font-bold uppercase tracking-wider underline group-hover:text-white"
                >
                  View Case Study →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-black text-white p-8 border border-black flex flex-col md:flex-row items-center justify-between gap-6 mt-12">
          <div>
            <h2 className="font-display text-xl font-bold uppercase">Want Similar Results for Your Software?</h2>
            <p className="text-xs text-gray-400 mt-1">Schedule an architectural consultation with our senior engineers.</p>
          </div>
          <Link href="/contact" className="bg-white text-black text-xs uppercase tracking-widest px-8 py-3.5 font-bold hover:bg-gray-200 transition-colors whitespace-nowrap">
            Consult Engineers →
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
