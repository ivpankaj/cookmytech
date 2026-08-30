import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Software Engineering & AI Development Services Studio",
  description:
    "Explore CookMyTech's full suite of software development services: AI software engineering, autonomous AI agents, enterprise RAG, full-stack web applications, MERN stack, Next.js, and custom SaaS platforms.",
  path: "/services",
  keywords: [
    "AI Development Services",
    "Full-Stack Development Services",
    "SaaS Development Company",
    "MERN Stack Studio",
    "Next.js Development Agency",
    "Custom Software Engineering",
  ],
});

export default function ServicesHubPage() {
  const serviceCategories = [
    {
      category: "AI & Machine Learning Engineering",
      services: [
        {
          title: "AI Development",
          href: "/services/ai-development",
          desc: "Comprehensive custom AI application engineering, AI model integrations, and intelligent automation systems.",
        },
        {
          title: "AI Software Development",
          href: "/services/ai-software-development",
          desc: "Enterprise-grade AI software development services for startups and high-growth companies.",
        },
        {
          title: "AI Web App Development",
          href: "/services/ai-web-app-development",
          desc: "AI dashboards, intelligent assistants, and web applications with embedded machine learning.",
        },
        {
          title: "AI SaaS Development",
          href: "/services/ai-saas-development",
          desc: "Multi-tenant AI products, LLM subscription engines, and automated AI SaaS platforms.",
        },
        {
          title: "LLM Development",
          href: "/services/llm-development",
          desc: "Custom LLM applications, OpenAI & Claude integrations, prompt engineering, and fine-tuning pipelines.",
        },
        {
          title: "AI Agent Development",
          href: "/services/ai-agent-development",
          desc: "Autonomous AI agents, tool-calling workflows, multi-agent orchestration, and task automation.",
        },
        {
          title: "RAG Systems Development",
          href: "/services/rag-development",
          desc: "Retrieval-Augmented Generation, vector embeddings, Pinecone indexing, and internal document search engines.",
        },
        {
          title: "AI Automation",
          href: "/services/ai-automation",
          desc: "End-to-end business process automation powered by custom AI pipelines and background workers.",
        },
      ],
    },
    {
      category: "Full-Stack & Modern Web Engineering",
      services: [
        {
          title: "Full-Stack Development",
          href: "/services/full-stack-development",
          desc: "Resilient frontend and scalable backend web application engineering built with TypeScript and modern frameworks.",
        },
        {
          title: "MERN Stack Development",
          href: "/services/mern-stack-development",
          desc: "Bespoke MongoDB, Express, React, and Node.js application development built for performance.",
        },
        {
          title: "Next.js Development",
          href: "/services/nextjs-development",
          desc: "High-speed SSR/SSG Next.js App Router applications, SEO architecture, and server components.",
        },
        {
          title: "React Development",
          href: "/services/react-development",
          desc: "Custom React frontend development, complex interactive dashboards, and design system engineering.",
        },
        {
          title: "Node.js Development",
          href: "/services/nodejs-development",
          desc: "Scalable microservices, event-driven backends, and high-concurrency Node.js API services.",
        },
        {
          title: "Web Application Development",
          href: "/services/web-application-development",
          desc: "Custom cloud-native web applications built for security, high traffic, and zero downtime.",
        },
      ],
    },
    {
      category: "SaaS, Cloud & Custom Systems",
      services: [
        {
          title: "SaaS Development",
          href: "/services/saas-development",
          desc: "Multi-tenant architecture, Stripe billing, role-based access control, and scalable SaaS infrastructure.",
        },
        {
          title: "Custom Software Development",
          href: "/services/custom-software-development",
          desc: "Tailored business software solutions engineered to solve specific operational and commercial bottlenecks.",
        },
        {
          title: "API Development",
          href: "/services/api-development",
          desc: "Clean REST and GraphQL API engineering, webhook integration, and high-security OAuth2 systems.",
        },
        {
          title: "Cloud Architecture",
          href: "/services/cloud-architecture",
          desc: "AWS & GCP cloud infrastructure, Docker containerization, Kubernetes, and automated CI/CD pipelines.",
        },
        {
          title: "MVP Development",
          href: "/services/mvp-development",
          desc: "Rapid prototype engineering for startups to launch production-ready MVPs in weeks.",
        },
      ],
    },
  ];

  return (
    <div className="bg-white text-black min-h-screen font-mono flex flex-col">
      <Navbar />
      <main id="main-content" className="flex-1 max-w-screen-xl mx-auto px-6 py-16 w-full">
        <Breadcrumbs items={[{ name: "Home", item: "/" }, { name: "Services", item: "/services" }]} />

        <div className="py-12 border-b border-black">
          <div className="text-xs uppercase tracking-widest text-gray-500 mb-4 font-bold">
            Engineering Capabilities Hub
          </div>
          <h1 className="font-display text-[clamp(2.2rem,6vw,5rem)] font-bold leading-none uppercase mb-6" style={{ fontWeight: 800 }}>
            OUR SOFTWARE & AI SERVICES
          </h1>
          <p className="text-sm leading-relaxed text-gray-700 max-w-3xl">
            CookMyTech is a specialized software engineering studio. We build production-ready AI applications, SaaS platforms, high-concurrency APIs, and modern full-stack systems with senior-only execution.
          </p>
        </div>

        <div className="space-y-16 py-12">
          {serviceCategories.map((cat) => (
            <div key={cat.category}>
              <h2 className="font-display text-xl font-bold uppercase tracking-tight mb-6 pb-2 border-b border-black">
                // {cat.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.services.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="p-6 border border-black bg-gray-50 hover:bg-black hover:text-white transition-colors duration-200 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-xs text-gray-500 group-hover:text-gray-400 font-bold uppercase">
                          Service
                        </span>
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                      <h3 className="font-display text-xl font-bold mb-3 group-hover:text-white">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-600 group-hover:text-gray-300 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-gray-200 group-hover:border-gray-800 text-[11px] uppercase tracking-widest text-gray-500 group-hover:text-gray-400 font-bold">
                      View Service Details →
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-black text-white p-8 md:p-12 border border-black flex flex-col md:flex-row items-center justify-between gap-8 mt-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-2">
              Ready to execute?
            </div>
            <h2 className="font-display text-2xl md:text-4xl font-bold uppercase">
              Build your software with CookMyTech
            </h2>
            <p className="text-xs text-gray-400 mt-2 max-w-xl">
              Get an actionable technical architecture proposal and fixed-scope estimate within 24 hours.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-white text-black text-xs uppercase tracking-widest px-8 py-4 font-bold hover:bg-gray-200 transition-colors whitespace-nowrap"
          >
            Start Project Consultation →
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
