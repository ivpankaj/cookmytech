import React from "react";

export default function JsonLd() {
  const siteUrl = "https://cookmytech.com";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#organization`,
    name: "CookMyTech",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    image: `${siteUrl}/logo.png`,
    description:
      "CookMyTech is a premier full-stack engineering studio specializing in production web applications, AI-powered products, system architecture, and API integration.",
    foundingDate: "2024",
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "Worldwide",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@cookmytech.com",
      contactType: "customer service",
      availableLanguage: ["English"],
    },
    sameAs: [
      "https://github.com/cookmytech",
      "https://linkedin.com/company/cookmytech",
      "https://x.com/cookmytech",
    ],
    knowsAbout: [
      "Full-Stack Web Development",
      "AI Product Engineering",
      "LLM Integration",
      "Next.js Development",
      "System Architecture",
      "API Development",
      "Cloud Infrastructure",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Engineering Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Production Web Apps",
            description:
              "End-to-end engineering for production web applications that ship fast, scale hard, and survive real traffic.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI-Powered Products",
            description:
              "LLM integrations, RAG pipelines, and custom AI agents built directly into your software products.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "System Architecture",
            description:
              "High-scale microservices, event-driven backends, and containerized cloud infrastructure built for 10x growth.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "API & Integrations",
            description:
              "Clean, documented REST & GraphQL APIs, webhooks, and third-party SaaS integrations.",
          },
        },
      ],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: "CookMyTech",
    description:
      "Production-grade web apps and AI-powered software engineering studio.",
    publisher: {
      "@id": `${siteUrl}/#organization`,
    },
    inLanguage: "en-US",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What services does CookMyTech offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CookMyTech provides full-stack production web application development, custom AI & LLM product integration, cloud system architecture, and API integration services.",
        },
      },
      {
        "@type": "Question",
        name: "How fast can CookMyTech deliver the first commit or MVP?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CookMyTech guarantees the first code commit within 48 hours of project onboarding with fixed-scope and transparent engineering sprints.",
        },
      },
      {
        "@type": "Question",
        name: "Do clients own all the intellectual property and code?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, 100%. Clients retain full ownership of all source code, IP, repositories, and cloud infrastructure with zero vendor lock-in.",
        },
      },
      {
        "@type": "Question",
        name: "What technologies does CookMyTech specialize in?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our core stack includes Next.js, React, TypeScript, Node.js, Python, PostgreSQL, Redis, AWS, GCP, Docker, Kubernetes, OpenAI, LangChain, Pinecone, and Prisma.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
    ],
  };

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
