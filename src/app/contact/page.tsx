import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Contact CookMyTech | Start Your Software Project",
  description:
    "Get in touch with CookMyTech engineering team. Request a fixed-scope technical proposal, architecture audit, or quote for your AI, SaaS, or web development project.",
  path: "/contact",
  keywords: [
    "Contact CookMyTech",
    "hire AI software developers",
    "software development quote",
    "SaaS engineering consultation",
  ],
});

export default function ContactPage() {
  return (
    <div className="bg-white text-black min-h-screen font-mono flex flex-col">
      <Navbar />
      <main id="main-content" className="flex-1 max-w-screen-xl mx-auto px-6 py-16 w-full">
        <Breadcrumbs items={[{ name: "Home", item: "/" }, { name: "Contact", item: "/contact" }]} />

        <div className="py-12 border-b border-black">
          <div className="text-xs uppercase tracking-widest text-gray-500 mb-4 font-bold">
            Direct Project Inquiry
          </div>
          <h1 className="font-display text-[clamp(2.2rem,6vw,5rem)] font-bold leading-none uppercase mb-6" style={{ fontWeight: 800 }}>
            START YOUR PROJECT WITH COOKMYTECH
          </h1>
          <p className="text-sm leading-relaxed text-gray-700 max-w-3xl">
            Send us your project specifications or technical requirements. Our senior software engineering team will analyze your project and respond within 24 hours with an actionable architecture plan and fixed estimate.
          </p>
        </div>

        <div className="py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 space-y-6 text-xs text-gray-700">
            <div className="p-6 border border-black bg-gray-50">
              <h2 className="font-display text-sm font-bold uppercase mb-2">Direct Email</h2>
              <a href="mailto:imvpankaj@gmail.com" className="font-bold underline text-black">
                imvpankaj@gmail.com
              </a>
            </div>

            <div className="p-6 border border-black bg-gray-50">
              <h2 className="font-display text-sm font-bold uppercase mb-2">Response SLA</h2>
              <p className="text-gray-600 leading-relaxed">
                Under 24 hours guaranteed for all technical project inquiries. First code commit delivered within 48 hours of onboarding.
              </p>
            </div>

            <div className="p-6 border border-black bg-gray-50">
              <h2 className="font-display text-sm font-bold uppercase mb-2">Client Confidentiality</h2>
              <p className="text-gray-600 leading-relaxed">
                Strict mutual NDA option available prior to detailed technical discovery and codebase inspection.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
