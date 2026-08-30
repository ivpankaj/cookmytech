import { SITE_URL } from "./metadata";

export interface BreadcrumbItem {
  name: string;
  item: string;
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#organization`,
    name: "CookMyTech",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/logo.png`,
    description:
      "CookMyTech is a full-stack & AI software engineering studio building production web applications, AI agents, RAG systems, LLM integrations, SaaS platforms, and cloud architecture.",
    foundingDate: "2024",
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "Worldwide",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "imvpankaj@gmail.com",
      contactType: "customer service",
      availableLanguage: ["English"],
    },
    sameAs: [
      "https://github.com/cookmytech",
      "https://linkedin.com/company/cookmytech",
      "https://x.com/cookmytech",
    ],
    knowsAbout: [
      "AI Software Development",
      "AI Web Application Development",
      "AI SaaS Development",
      "Custom AI Development",
      "LLM Application Development",
      "AI Agent Development",
      "RAG Systems Development",
      "AI Automation Development",
      "Full-Stack Web Development",
      "MERN Stack Development",
      "Next.js Development",
      "React Development",
      "Node.js Backend Development",
      "SaaS Development",
      "Custom Software Development",
      "API Development",
      "Cloud Architecture",
    ],
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "CookMyTech",
    description: "AI & Full-Stack Software Development Studio",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    inLanguage: "en-US",
  };
}

export function generateServiceSchema({
  name,
  description,
  url,
  serviceType,
}: {
  name: string;
  description: string;
  url: string;
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}/#service`,
    name,
    description,
    serviceType,
    url,
    provider: {
      "@type": "Organization",
      name: "CookMyTech",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Global / Remote",
    },
    termsOfService: `${SITE_URL}/terms`,
  };
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item.startsWith("http") ? item.item : `${SITE_URL}${item.item}`,
    })),
  };
}

export function generateFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  authorName = "CookMyTech Engineering Team",
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: title,
    description,
    url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Organization",
      name: authorName,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "CookMyTech",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    image: `${SITE_URL}/logo.png`,
  };
}
