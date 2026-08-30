import React from "react";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      number: "01",
      title: "AI Development & Agents",
      desc: "Custom AI software development, autonomous AI agents, enterprise RAG pipelines, and LLM integrations engineered directly into your core product.",
      link: "/services/ai-development",
      sublinks: [
        { label: "AI Software", href: "/services/ai-software-development" },
        { label: "AI Agents", href: "/services/ai-agent-development" },
        { label: "RAG Systems", href: "/services/rag-development" },
        { label: "LLM Apps", href: "/services/llm-development" },
      ],
    },
    {
      number: "02",
      title: "SaaS & Web App Engineering",
      desc: "End-to-end engineering for production web apps, multi-tenant SaaS platforms, and MVP builds that ship fast and handle high traffic.",
      link: "/services/saas-development",
      sublinks: [
        { label: "Full-Stack Apps", href: "/services/full-stack-development" },
        { label: "SaaS Platforms", href: "/services/saas-development" },
        { label: "AI SaaS", href: "/services/ai-saas-development" },
        { label: "MVP Engineering", href: "/services/mvp-development" },
      ],
    },
    {
      number: "03",
      title: "Next.js & MERN Stack",
      desc: "Modern JavaScript and TypeScript engineering utilizing Next.js App Router, React, Node.js, and Express for lightning-fast frontend & robust backends.",
      link: "/services/nextjs-development",
      sublinks: [
        { label: "Next.js Dev", href: "/services/nextjs-development" },
        { label: "MERN Stack", href: "/services/mern-stack-development" },
        { label: "React Dev", href: "/services/react-development" },
        { label: "Node.js Backend", href: "/services/nodejs-development" },
      ],
    },
    {
      number: "04",
      title: "APIs & Cloud Systems",
      desc: "Clean, documented REST and GraphQL APIs, high-concurrency microservices, micro-architectures, and AWS/GCP cloud deployments.",
      link: "/services/api-development",
      sublinks: [
        { label: "Custom Software", href: "/services/custom-software-development" },
        { label: "API Engineering", href: "/services/api-development" },
        { label: "Cloud Architecture", href: "/services/cloud-architecture" },
        { label: "AI Automation", href: "/services/ai-automation" },
      ],
    },
  ];

  return (
    <section id="services" className="border-b border-black bg-white font-mono">
      <div className="max-w-screen-xl mx-auto px-6 pb-16">
        <div className="py-16 border-b border-black flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-gray-500 mb-4">
              Core Capabilities
            </div>
            <h2
              className="font-display text-[clamp(2rem,6vw,5rem)] font-bold leading-none"
              style={{ fontWeight: 800 }}
            >
              OUR SERVICES
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-block bg-black text-white text-xs uppercase tracking-widest px-6 py-3 border border-black hover:bg-gray-800 transition-colors font-bold whitespace-nowrap"
          >
            Explore All 19 Services →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {services.map((s, i) => (
            <article
              key={s.number}
              className={`service-card p-8 border-b border-black flex flex-col justify-between group ${
                i % 2 === 1 ? "md:border-l md:ml-[-1px]" : ""
              }`}
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xs text-gray-400 font-mono">
                    {s.number}
                  </span>
                  <Link
                    href={s.link}
                    className="service-arrow text-xl hover:translate-x-1 transition-transform"
                    aria-label={`Learn more about ${s.title}`}
                  >
                    →
                  </Link>
                </div>
                <h3
                  className="font-display text-2xl font-bold mb-4"
                  style={{ fontWeight: 700 }}
                >
                  <Link href={s.link} className="hover:underline">
                    {s.title}
                  </Link>
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 mb-6">
                  {s.desc}
                </p>
              </div>

              <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="text-[11px] uppercase tracking-widest text-gray-400 mb-2 font-bold">
                  Specialized Solutions:
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  {s.sublinks.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      className="border border-black px-2.5 py-1 bg-gray-50 hover:bg-black hover:text-white transition-colors"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
