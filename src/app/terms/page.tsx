import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Terms of Service | CookMyTech Software Studio",
  description:
    "Review the terms of service, intellectual property ownership guarantees, code delivery warranties, and consulting agreements for CookMyTech.",
  path: "/terms",
  keywords: [
    "CookMyTech terms of service",
    "software engineering terms",
    "intellectual property terms",
    "software consulting agreement",
  ],
});

export default function TermsOfServicePage() {
  return (
    <div className="bg-white text-black min-h-screen font-mono flex flex-col">
      <Navbar />
      <main id="main-content" className="flex-1 max-w-screen-xl mx-auto px-6 py-16 w-full">
        <Breadcrumbs
          items={[
            { name: "Home", item: "/" },
            { name: "Terms of Service", item: "/terms" },
          ]}
        />

        <div className="py-12 border-b border-black">
          <div className="text-xs uppercase tracking-widest text-gray-500 mb-4 font-bold">
            Legal & Governance
          </div>
          <h1
            className="font-display text-[clamp(2.2rem,6vw,4.5rem)] font-bold leading-none uppercase mb-6"
            style={{ fontWeight: 800 }}
          >
            TERMS OF SERVICE
          </h1>
          <p className="text-sm leading-relaxed text-gray-700 max-w-3xl">
            Effective Date: January 1, 2026. These Terms govern software engineering engagements, technical consulting, and digital services delivered by CookMyTech (&quot;Studio&quot;).
          </p>
        </div>

        <div className="py-12 space-y-10 max-w-4xl text-xs sm:text-sm text-gray-800 leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold uppercase text-black">
              1. Engagement & Services Scope
            </h2>
            <p>
              CookMyTech delivers custom software development, artificial intelligence engineering, cloud architecture, and technical consulting services under agreed Statements of Work (SOW) or sprint specifications. All project milestones, deliverables, and engineering timelines are defined explicitly in writing prior to sprint execution.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold uppercase text-black">
              2. 100% Intellectual Property Ownership
            </h2>
            <p>
              Upon receipt of full payment for agreed milestones, all intellectual property rights, source code, database architectures, documentation, and digital assets created by CookMyTech specifically for the client transfer entirely to the client. CookMyTech retains zero ownership and imposes no vendor lock-in or recurring proprietary license fees on custom codebases.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold uppercase text-black">
              3. Confidentiality & Non-Disclosure
            </h2>
            <p>
              Both parties agree to treat all technical specifications, business logic, customer data, and proprietary workflows as strictly confidential. Mutual Non-Disclosure Agreements (NDAs) are executed prior to deep architectural audits and code repository inspection.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold uppercase text-black">
              4. Warranties & Code Quality
            </h2>
            <p>
              CookMyTech warrants that all code delivered is authored in accordance with modern engineering standards, includes automated test coverage where specified, and undergoes rigorous linting, type-checking, and security inspection prior to production release. We provide a 30-day post-launch warranty covering bug fixes on agreed specifications.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold uppercase text-black">
              5. Governing Law & Jurisdiction
            </h2>
            <p>
              These Terms and any commercial agreements entered into with CookMyTech shall be governed by and construed in accordance with the laws of India, with jurisdiction in Uttar Pradesh / Delhi NCR for dispute resolution.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold uppercase text-black">
              6. Contact Information
            </h2>
            <p>
              For legal inquiries, contract clarifications, or technical compliance questions, contact us directly at{" "}
              <a href="mailto:hello@cookmytech.com" className="font-bold underline text-black">
                hello@cookmytech.com
              </a>{" "}
              or call{" "}
              <a href="tel:+918929517046" className="font-bold underline text-black">
                +91 89295 17046
              </a>.
            </p>
          </section>
        </div>

        <div className="bg-gray-100 border border-black p-8 flex flex-col sm:flex-row items-center justify-between gap-6 mt-12">
          <div>
            <h3 className="font-display text-lg font-bold uppercase">Ready to Discuss Your Project?</h3>
            <p className="text-xs text-gray-600 mt-1">Get an actionable technical specification and proposal within 24 hours.</p>
          </div>
          <Link
            href="/contact"
            className="bg-black text-white text-xs uppercase tracking-widest px-8 py-3.5 font-bold hover:bg-gray-800 transition-colors whitespace-nowrap"
          >
            Start Project Consultation →
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
