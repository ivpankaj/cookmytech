"use client";

import { useState } from "react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What services does CookMyTech offer?",
      a: "CookMyTech is a senior engineering studio providing production web application development, custom AI product integration (LLMs, RAG, custom agents), cloud system architecture, and API design & integration.",
    },
    {
      q: "How fast can CookMyTech deliver the first commit?",
      a: "We guarantee the first working code commit within 48 hours of onboarding. We run transparent, weekly engineering sprints with live staging environments.",
    },
    {
      q: "Do I own all code and intellectual property?",
      a: "Yes, 100%. You retain full ownership of all code repositories, cloud infrastructure, domain access, and intellectual property with zero vendor lock-in.",
    },
    {
      q: "How do you price projects?",
      a: "We work on fixed-scope, fixed-price project models. Every deliverable, timeline, and requirement is specified upfront so there are never unexpected costs.",
    },
    {
      q: "How is SEO and performance handled in CookMyTech apps?",
      a: "Every web app built by CookMyTech adheres to strict Core Web Vitals targets, server-side rendering (SSR), structured JSON-LD schema markup, canonical URLs, semantic HTML5, and automated XML sitemaps.",
    },
  ];

  return (
    <section id="faq" className="border-b border-black bg-white font-mono">
      <div className="max-w-screen-xl mx-auto px-6 pb-16">
        <div className="py-16 border-b border-black">
          <div className="text-xs uppercase tracking-widest text-gray-500 mb-4">
            Frequently Asked Questions
          </div>
          <h2
            className="font-display text-[clamp(2rem,6vw,5rem)] font-bold leading-none"
            style={{ fontWeight: 800 }}
          >
            QUESTIONS & ANSWERS
          </h2>
        </div>

        <div className="divide-y divide-black border-b border-black">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.q} className="group">
                <button
                  className="w-full py-6 flex justify-between items-center text-left hover:bg-gray-50 px-4 transition-colors font-mono"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span className="font-display font-bold text-lg pr-4 text-black">
                    {faq.q}
                  </span>
                  <span className="text-xl font-bold flex-shrink-0">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${i}`}
                    className="px-4 pb-6 text-sm text-gray-600 leading-relaxed max-w-3xl"
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
