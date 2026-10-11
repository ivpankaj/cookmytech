import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Privacy Policy | CookMyTech Data Protection & Security",
  description:
    "Learn how CookMyTech protects your personal and project information in compliance with global data privacy standards and the India Digital Personal Data Protection (DPDP) Act.",
  path: "/privacy-policy",
  keywords: [
    "CookMyTech privacy policy",
    "software engineering data security",
    "DPDP compliance",
    "developer confidentiality",
  ],
});

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white text-black min-h-screen font-mono flex flex-col">
      <Navbar />
      <main id="main-content" className="flex-1 max-w-screen-xl mx-auto px-6 py-16 w-full">
        <Breadcrumbs
          items={[
            { name: "Home", item: "/" },
            { name: "Privacy Policy", item: "/privacy-policy" },
          ]}
        />

        <div className="py-12 border-b border-black">
          <div className="text-xs uppercase tracking-widest text-gray-500 mb-4 font-bold">
            Data Protection & Privacy
          </div>
          <h1
            className="font-display text-[clamp(2.2rem,6vw,4.5rem)] font-bold leading-none uppercase mb-6"
            style={{ fontWeight: 800 }}
          >
            PRIVACY POLICY
          </h1>
          <p className="text-sm leading-relaxed text-gray-700 max-w-3xl">
            Effective Date: January 1, 2026. CookMyTech values client confidentiality, data minimization, and strict security in handling all communication, project inquiries, and engineering specifications.
          </p>
        </div>

        <div className="py-12 space-y-10 max-w-4xl text-xs sm:text-sm text-gray-800 leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold uppercase text-black">
              1. Information We Collect
            </h2>
            <p>
              We collect information that you voluntarily provide when submitting a project inquiry, scheduling a technical consultation, or contacting us via email or phone. This includes:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Contact details: Name, email address, phone number, company name.</li>
              <li>Project information: Technical requirements, architectural constraints, timeline expectations, and budget parameters.</li>
              <li>Technical diagnostics: Anonymized device, browser type, and referrer logs used solely for website security and Core Web Vitals optimization.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold uppercase text-black">
              2. How We Use Your Information
            </h2>
            <p>
              Your information is used exclusively to evaluate technical project inquiries, formulate architecture blueprints, prepare fixed-scope estimates, and coordinate engineering communication. We do not sell, rent, or trade your contact or project data to any third-party marketing brokers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold uppercase text-black">
              3. AI & Data Security Practices
            </h2>
            <p>
              CookMyTech adheres to enterprise AI privacy principles. Client proprietary codebase data, technical designs, and internal documentation are never submitted into public foundation model training pools without explicit client authorization and zero-data-retention enterprise API configurations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold uppercase text-black">
              4. Data Retention & Your Rights
            </h2>
            <p>
              Under applicable data protection laws, including the India Digital Personal Data Protection (DPDP) Act 2023 and GDPR guidelines, you have the right to request access to, correction of, or complete deletion of your personal contact data from our active records at any time.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold uppercase text-black">
              5. Contact Our Privacy Officer
            </h2>
            <p>
              If you have questions regarding this Privacy Policy or wish to request data erasure, reach out to our team at{" "}
              <a href="mailto:hello@cookmytech.com" className="font-bold underline text-black">
                hello@cookmytech.com
              </a>{" "}
              or by phone at{" "}
              <a href="tel:+918929517046" className="font-bold underline text-black">
                +91 89295 17046
              </a>.
            </p>
          </section>
        </div>

        <div className="bg-gray-100 border border-black p-8 flex flex-col sm:flex-row items-center justify-between gap-6 mt-12">
          <div>
            <h3 className="font-display text-lg font-bold uppercase">Have a confidential project?</h3>
            <p className="text-xs text-gray-600 mt-1">We execute mutual NDAs within 24 hours prior to technical code inspection.</p>
          </div>
          <Link
            href="/contact"
            className="bg-black text-white text-xs uppercase tracking-widest px-8 py-3.5 font-bold hover:bg-gray-800 transition-colors whitespace-nowrap"
          >
            Contact Engineering Team →
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
