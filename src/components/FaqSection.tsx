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
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
        <div className="py-10 sm:py-16 border-b border-black">
          <div className="text-xs uppercase tracking-wider sm:tracking-widest text-gray-500 mb-2 sm:mb-4">
            Frequently Asked Questions
          </div>
          <h2
            className="font-display text-[clamp(1.75rem,6vw,5rem)] font-bold leading-none break-words"
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
                  className="w-full py-5 sm:py-6 flex justify-between items-center text-left hover:bg-gray-50 px-2 sm:px-4 transition-colors font-mono"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span className="font-display font-bold text-base sm:text-lg pr-3 sm:pr-4 text-black break-words">
                    {faq.q}
                  </span>
                  <span className="text-xl font-bold flex-shrink-0">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${i}`}
                    className="px-2 sm:px-4 pb-5 sm:pb-6 text-xs sm:text-sm text-gray-600 leading-relaxed max-w-3xl"
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
