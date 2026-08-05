import React from "react";
import TechIcon from "./TechIcon";

export default function TechMarquee() {
  const stack = [
    "Next.js",
    "TypeScript",
    "React",
    "Node.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "AWS",
    "GCP",
    "Docker",
    "Kubernetes",
    "OpenAI",
    "LangChain",
    "Pinecone",
    "Prisma",
  ];

  return (
    <aside
      aria-label="Technologies and frameworks used by CookMyTech"
      className="overflow-hidden border-y border-black bg-white text-black py-3 font-mono"
    >
      <div className="marquee-track">
        {[...Array(2)].map((_, ri) => (
          <div key={ri} className="flex items-center">
            {stack.map((s) => (
              <span key={`${ri}-${s}`} className="flex items-center gap-3 mx-5">
                <TechIcon name={s} size={18} />
                <span className="text-xs uppercase tracking-widest">{s}</span>
                <span className="text-gray-400 ml-2" aria-hidden="true">
                  ✦
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </aside>
  );
}
