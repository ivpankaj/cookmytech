import React from "react";

export default function Services() {
  const services = [
    {
      number: "01",
      title: "Production Web Apps",
      desc: "End-to-end engineering for web applications that ship fast, scale hard, and survive real traffic. Robust frontend performance paired with resilient backend architecture.",
    },
    {
      number: "02",
      title: "AI-Powered Products",
      desc: "LLM integrations, RAG pipelines, custom agents, and vector database setups — we engineer AI into your product where it directly drives business value.",
    },
    {
      number: "03",
      title: "System Architecture",
      desc: "We design cloud-native infrastructures, microservices, and data pipelines that withstand 10x traffic spikes without breaking.",
    },
    {
      number: "04",
      title: "API & Integrations",
      desc: "Clean, self-documenting REST and GraphQL APIs. High-reliability third-party SaaS and payment integrations built to handle high concurrency.",
    },
  ];

  return (
    <section id="services" className="border-b border-black bg-white font-mono">
      <div className="max-w-screen-xl mx-auto px-6 pb-16">
        <div className="py-16 border-b border-black">
          <div className="text-xs uppercase tracking-widest text-gray-500 mb-4">
            Engineering Capabilities
          </div>
          <h2
            className="font-display text-[clamp(2rem,6vw,5rem)] font-bold leading-none"
            style={{ fontWeight: 800 }}
          >
            OUR SERVICES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {services.map((s, i) => (
            <article
              key={s.number}
              className={`service-card p-8 border-b border-black hover:bg-black hover:text-white transition-colors duration-200 group ${
                i % 2 === 1 ? "md:border-l md:ml-[-1px]" : ""
              }`}
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs text-gray-400 group-hover:text-gray-500 font-mono">
                  {s.number}
                </span>
                <span className="service-arrow text-xl" aria-hidden="true">
                  →
                </span>
              </div>
              <h3
                className="font-display text-2xl font-bold mb-4"
                style={{ fontWeight: 700 }}
              >
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 group-hover:text-gray-300">
                {s.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
