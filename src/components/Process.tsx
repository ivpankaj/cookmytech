import React from "react";

export default function Process() {
  const steps = [
    {
      step: "DISCOVER",
      detail:
        "We audit your project requirements, technical constraints, and target performance goals to define a foolproof engineering blueprint.",
    },
    {
      step: "ARCHITECT",
      detail:
        "Database modeling, system design, API contracts, and SEO structure established before writing a single line of production code.",
    },
    {
      step: "BUILD",
      detail:
        "Iterative, test-covered, and code-reviewed engineering sprints with weekly live demos and transparent progress tracking.",
    },
    {
      step: "DEPLOY",
      detail:
        "Automated CI/CD pipelines, zero-downtime deployments, real-time APM monitoring, and comprehensive developer documentation.",
    },
  ];

  return (
    <section id="process" className="border-b border-black bg-white font-mono">
      <div className="max-w-screen-xl mx-auto px-6 pb-16">
        <div className="py-16 border-b border-black">
          <div className="text-xs uppercase tracking-widest text-gray-500 mb-4">
            Methodology & Execution
          </div>
          <h2
            className="font-display text-[clamp(2rem,6vw,5rem)] font-bold leading-none"
            style={{ fontWeight: 800 }}
          >
            OUR PROCESS
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, i) => (
            <div
              key={item.step}
              className={`process-item p-8 border-b border-black ${
                i < steps.length - 1 ? "lg:border-r" : ""
              } ${i > 0 ? "lg:ml-[-1px]" : ""}`}
            >
              <div className="font-mono text-5xl font-bold text-gray-200 mb-4 leading-none select-none">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3
                className="font-display font-bold text-lg mb-3 text-black"
                style={{ fontWeight: 700 }}
              >
                {item.step}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
