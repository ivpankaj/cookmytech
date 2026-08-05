import React from "react";
import TechIcon from "./TechIcon";

export default function TechStack() {
  const stack = [
    { name: "Next.js", desc: "React Framework for SSR & SEO" },
    { name: "TypeScript", desc: "Type-safe JavaScript" },
    { name: "React", desc: "UI Component Engine" },
    { name: "Node.js", desc: "High-throughput Backend Runtime" },
    { name: "Python", desc: "AI / ML & Data Processing" },
    { name: "PostgreSQL", desc: "Relational SQL Database" },
    { name: "MongoDB", desc: "Document NoSQL Database" },
    { name: "Redis", desc: "In-memory Caching & Pub/Sub" },
    { name: "AWS", desc: "Cloud Hosting & Infrastructure" },
    { name: "GCP", desc: "Google Cloud Platform Infrastructure" },
    { name: "Docker", desc: "Containerized Applications" },
    { name: "Kubernetes", desc: "Container Orchestration" },
    { name: "OpenAI", desc: "LLMs & Embeddings API" },
    { name: "LangChain", desc: "AI Agent & Prompt Chains" },
    { name: "Pinecone", desc: "Vector Database for RAG" },
    { name: "Prisma", desc: "Next-gen Node/TS ORM" },
  ];

  return (
    <section id="stack" className="border-b border-black bg-white font-mono">
      <div className="max-w-screen-xl mx-auto px-6 pb-16">
        <div className="py-16 border-b border-black grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div>
            <div className="text-xs uppercase tracking-widest text-gray-500 mb-4">
              Proven Engineering Stack
            </div>
            <h2
              className="font-display text-[clamp(2rem,6vw,5rem)] font-bold leading-none"
              style={{ fontWeight: 800 }}
            >
              TECH STACK
            </h2>
          </div>
          <p className="text-sm text-gray-600 leading-loose max-w-md">
            We build with battle-tested software frameworks and cloud services designed for speed, security, search engine indexability, and long-term maintainability.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8">
          {stack.map((item, i) => (
            <div
              key={item.name}
              className={`p-5 border-b border-black group hover:bg-black hover:text-white transition-colors duration-150 ${
                i % 2 === 1 ? "border-l ml-[-1px]" : ""
              } ${i % 4 > 1 ? "sm:border-l sm:ml-[-1px]" : ""}`}
            >
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="flex items-center justify-center h-8 w-8 group-hover:brightness-200 transition-all duration-150">
                  <TechIcon name={item.name} size={32} />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest leading-tight font-bold">
                    {item.name}
                  </h3>
                  <span className="sr-only">{item.desc}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
