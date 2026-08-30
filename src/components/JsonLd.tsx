import React from "react";
import {
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateFaqSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema";

export default function JsonLd() {
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebSiteSchema();
  const faqSchema = generateFaqSchema([
    {
      question: "What services does CookMyTech offer?",
      answer:
        "CookMyTech is an AI & full-stack software development studio providing custom AI software development, AI agent engineering, enterprise RAG systems, full-stack web applications, SaaS platform development, MERN stack solutions, Next.js applications, high-concurrency APIs, and cloud system architecture.",
    },
    {
      question: "How fast can CookMyTech deliver the first code commit or MVP?",
      answer:
        "CookMyTech guarantees the first code commit within 48 hours of project onboarding with fixed-scope and transparent engineering sprints.",
    },
    {
      question: "Do clients own all intellectual property and source code?",
      answer:
        "Yes, 100%. Clients retain full ownership of all source code, IP, repositories, cloud infrastructure, and documentation with zero vendor lock-in.",
    },
    {
      question: "What technologies does CookMyTech specialize in?",
      answer:
        "Our core stack includes Next.js, React, TypeScript, Node.js, Python, PostgreSQL, Redis, AWS, Google Cloud, Docker, Kubernetes, OpenAI, LangChain, Pinecone, Express, and MongoDB.",
    },
  ]);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "/" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}
