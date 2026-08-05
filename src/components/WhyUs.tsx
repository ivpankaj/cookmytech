import React from "react";

export default function WhyUs() {
  const highlights = [
    {
      icon: "▲",
      title: "Senior-Only Execution",
      body: "No handoffs to junior developers. Senior software engineers design, write, test, and ship your codebase.",
    },
    {
      icon: "■",
      title: "Fixed Scope, Fixed Price",
      body: "We specify system requirements, timelines, and deliverables upfront. Zero unexpected costs or scope creep.",
    },
    {
      icon: "●",
      title: "100% Intellectual Property Ownership",
      body: "You own all code repositories, cloud configurations, API credentials, and documentation with zero vendor lock-in.",
    },
    {
      icon: "◆",
      title: "AI-Native Architecture",
      body: "We design software systems with AI, LLM caching, and scalable vector indexing engineered into the core architecture.",
    },
  ];

  return (
    <section id="why-us" className="border-b border-black bg-black text-white font-mono">
      <div className="max-w-screen-xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="lg:border-r border-gray-800 lg:pr-12">
            <div className="text-xs uppercase tracking-widest text-gray-400 mb-6">
              Why Partner With Us
            </div>
            <h2
              className="font-display text-4xl lg:text-5xl font-bold leading-tight mb-8"
              style={{ fontWeight: 800 }}
            >
              WE'RE NOT AN AGENCY.<br />
              WE'RE AN ENGINEERING<br />
              <span className="text-gray-500">KITCHEN.</span>
            </h2>
            <p className="text-sm leading-loose text-gray-400 max-w-md">
              Most digital agencies deliver unoptimized prototypes. CookMyTech is a specialized studio of senior full-stack and AI engineers who build battle-tested systems designed for high performance, top SEO rankings, and seamless developer handoff.
            </p>
          </div>

          <div className="lg:pl-12 mt-12 lg:mt-0">
            {highlights.map((item, i) => (
              <div
                key={item.title}
                className={`flex gap-6 p-6 border-t border-gray-800 hover:border-gray-400 transition-colors duration-200 ${
                  i === 0 ? "border-t-0" : ""
                }`}
              >
                <span className="text-gray-500 text-lg mt-0.5 flex-shrink-0" aria-hidden="true">
                  {item.icon}
                </span>
                <div>
                  <h3
                    className="font-display font-bold mb-1 text-sm text-white"
                    style={{ fontWeight: 700 }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
