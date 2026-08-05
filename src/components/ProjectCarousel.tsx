"use client";

import React, { useState, useEffect } from "react";

interface ProjectSlide {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  metrics: { label: string; value: string }[];
  tags: string[];
}

export default function ProjectCarousel() {
  const slides: ProjectSlide[] = [
    {
      id: "ai-saas",
      number: "01 / 04",
      category: "AI & LLM AGENTS",
      title: "Enterprise RAG & Agent Pipeline",
      description:
        "Engineered a multi-modal RAG architecture handling 2M+ vector embeddings with sub-100ms retrieval latency and automated fallback routing.",
      metrics: [
        { label: "Latency", value: "<85ms" },
        { label: "Daily Queries", value: "1.2M+" },
        { label: "Uptime SLA", value: "99.99%" },
      ],
      tags: ["OpenAI", "Pinecone", "LangChain", "Python", "Next.js"],
    },
    {
      id: "ecommerce-engine",
      number: "02 / 04",
      category: "HIGH-LOAD SYSTEM",
      title: "Real-time E-Commerce Core",
      description:
        "Re-engineered core checkout and inventory synchronization engine to handle Black Friday surge traffic without a single dropped transaction.",
      metrics: [
        { label: "Peak RPS", value: "15,000" },
        { label: "Checkout Time", value: "1.2s" },
        { label: "Zero Downtime", value: "100%" },
      ],
      tags: ["Node.js", "Redis", "PostgreSQL", "Docker", "AWS"],
    },
    {
      id: "fintech-api",
      number: "03 / 04",
      category: "API & INTEGRATIONS",
      title: "Global Payment Routing Engine",
      description:
        "Multi-provider payment orchestration layer with automatic failover, webhooks management, and cryptographic audit logging.",
      metrics: [
        { label: "Volume Processed", value: "$45M+" },
        { label: "Auth Success", value: "98.7%" },
        { label: "Providers", value: "12 Integrated" },
      ],
      tags: ["TypeScript", "GraphQL", "OAuth 2.0", "K8s", "GCP"],
    },
    {
      id: "analytics-platform",
      number: "04 / 04",
      category: "DATA PIPELINE",
      title: "Streaming Event Analytics",
      description:
        "High-throughput event processing platform aggregating telemetry from 500k active IoT clients in real-time.",
      metrics: [
        { label: "Events/Sec", value: "50,000" },
        { label: "Data Compression", value: "4.2x" },
        { label: "Cost Reduced", value: "40%" },
      ],
      tags: ["Python", "Redis", "Kafka", "PostgreSQL", "Docker"],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  const current = slides[currentIndex];

  return (
    <section
      id="projects"
      className="border-b border-black bg-white font-mono"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-screen-xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-black gap-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-gray-500 mb-2">
              Featured Case Studies
            </div>
            <h2
              className="font-display text-[clamp(2rem,5vw,4.5rem)] font-bold leading-none"
              style={{ fontWeight: 800 }}
            >
              PROJECT SHOWCASE
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs font-bold font-mono tracking-widest mr-4">
              {current.number}
            </span>
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="w-12 h-12 border border-black flex items-center justify-center text-lg hover:bg-black hover:text-white transition-colors duration-150 font-bold"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="w-12 h-12 border border-black flex items-center justify-center text-lg hover:bg-black hover:text-white transition-colors duration-150 font-bold"
            >
              →
            </button>
          </div>
        </div>

        <div className="border border-black p-8 md:p-12 bg-gray-50 relative overflow-hidden transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="inline-block bg-black text-white text-xs px-3 py-1 uppercase tracking-widest font-bold mb-6">
                  {current.category}
                </div>
                <h3 className="font-display text-2xl md:text-4xl font-bold mb-6 leading-tight">
                  {current.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-8 max-w-xl">
                  {current.description}
                </p>
              </div>

              <div>
                <div className="text-xs uppercase tracking-widest text-gray-400 mb-3 font-bold">
                  Technologies Used
                </div>
                <div className="flex flex-wrap gap-2">
                  {current.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs border border-black bg-white px-3 py-1 font-mono uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-black pt-8 lg:pt-0 lg:pl-8">
              <div className="text-xs uppercase tracking-widest text-gray-500 mb-6 font-bold">
                Impact & Metrics
              </div>
              <div className="space-y-4 mb-8">
                {current.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="p-4 border border-black bg-white flex justify-between items-center"
                  >
                    <span className="text-xs text-gray-600 uppercase font-mono">
                      {m.label}
                    </span>
                    <span className="font-display text-xl font-bold text-black">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="w-full bg-gray-200 h-1 relative overflow-hidden">
                <div
                  className="bg-black h-full transition-all duration-300 ease-out"
                  style={{
                    width: `${((currentIndex + 1) / slides.length) * 100}%`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 transition-all duration-200 ${
                idx === currentIndex ? "w-8 bg-black" : "w-2 bg-gray-300 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
