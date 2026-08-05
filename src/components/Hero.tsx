import React from "react";

export default function Hero() {
  const stats = [
    { val: "40+", label: "Projects Shipped" },
    { val: "< 48h", label: "First Commit" },
    { val: "99.9%", label: "Uptime SLA" },
    { val: "0", label: "Missed Deadlines" },
  ];

  const ongoingProjects = [
    { label: "AI SaaS Platform", status: "IN PROGRESS", pct: 72 },
    { label: "E-commerce Engine", status: "REVIEW", pct: 95 },
    { label: "LLM Agent Pipeline", status: "SHIPPED", pct: 100 },
  ];

  return (
    <section className="pt-14 min-h-screen border-b border-black flex flex-col bg-white text-black font-mono">
      <div className="flex-1 max-w-screen-xl mx-auto px-6 pt-16 pb-12 grid grid-cols-1 lg:grid-cols-12 gap-0">
        <div className="lg:col-span-8 lg:border-r border-black lg:pr-12 flex flex-col justify-between">
          <div>
            <div className="text-xs uppercase tracking-widest mb-8 fade-up fade-up-delay-1">
              <span className="bg-black text-white px-2 py-0.5 mr-2 font-bold">
                EST. 2024
              </span>
              Full-Stack & AI Software Engineering Studio
            </div>
            <h1
              className="font-display leading-none mb-8 fade-up fade-up-delay-2"
              style={{ fontWeight: 800 }}
            >
              <span className="block text-[clamp(2rem,4.5vw,4.5rem)] tracking-tight mb-2">
                WE BUILD
              </span>
              <span className="block text-[clamp(1.8rem,4.1vw,4.1rem)] tracking-tighter bg-black inline-block px-3.5 py-1 mb-2 max-w-full">
                {[
                  { char: "S", color: "#FF453A" },
                  { char: "O", color: "#FF9F0A" },
                  { char: "F", color: "#FFD60A" },
                  { char: "T", color: "#30D158" },
                  { char: "W", color: "#00F5D4" },
                  { char: "A", color: "#64D2FF" },
                  { char: "R", color: "#0A84FF" },
                  { char: "E", color: "#5E5CE6" },
                  { char: "S", color: "#BF5AF2" },
                ].map((item, index) => (
                  <span key={index} style={{ color: item.color }}>
                    {item.char}
                  </span>
                ))}
              </span>
              <span className="block text-[clamp(2rem,4.5vw,4.5rem)] tracking-tight">
                THAT SHIP.
              </span>
            </h1>
            <p className="text-sm leading-relaxed max-w-lg text-gray-700 fade-up fade-up-delay-3 mb-12">
              Production-grade web apps and AI-powered software engineered by senior specialists who build for high load, zero downtime, and long-term maintainability.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 fade-up fade-up-delay-4 mb-8 lg:mb-0">
            <a
              href="#contact"
              className="bg-black text-white text-xs uppercase tracking-widest px-8 py-4 border border-black hover:bg-white hover:text-black transition-colors duration-150 text-center font-bold"
            >
              Cook Something →
            </a>
            <a
              href="#services"
              className="bg-white text-black text-xs uppercase tracking-widest px-8 py-4 border border-black hover:bg-black hover:text-white transition-colors duration-150 text-center font-bold"
            >
              See Services
            </a>
          </div>
        </div>

        <div className="lg:col-span-4 lg:pl-12 flex flex-col justify-end mt-12 lg:mt-0">
          <div className="border border-black p-6 mb-6 bg-gray-50">
            <h2 className="text-xs uppercase tracking-widest text-gray-500 mb-4 font-bold">
              Currently cooking
            </h2>
            <div className="space-y-4">
              {ongoingProjects.map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-medium">{item.label}</span>
                    <span
                      className={
                        item.status === "SHIPPED"
                          ? "font-bold text-black"
                          : "text-gray-600"
                      }
                    >
                      {item.status}
                    </span>
                  </div>
                  <div
                    className="h-1.5 bg-gray-200"
                    role="progressbar"
                    aria-valuenow={item.pct}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${item.label} completion status`}
                  >
                    <div
                      className="h-full bg-black transition-all duration-500"
                      style={{ width: `${item.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`p-5 border border-black bg-white ${
                  i % 2 === 1 ? "ml-[-1px]" : ""
                } ${i > 1 ? "mt-[-1px]" : ""}`}
              >
                <div className="font-display text-2xl font-bold mb-1">
                  {stat.val}
                </div>
                <div className="text-xs text-gray-600 leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
