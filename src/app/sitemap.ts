import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes = [
    // Main Pages
    "",
    "/about",
    "/contact",
    "/services",
    "/industries",
    "/case-studies",
    "/blog",
    "/html-sitemap",

    // Service Pages
    "/services/ai-development",
    "/services/ai-software-development",
    "/services/ai-web-app-development",
    "/services/ai-saas-development",
    "/services/llm-development",
    "/services/ai-agent-development",
    "/services/rag-development",
    "/services/ai-automation",
    "/services/full-stack-development",
    "/services/mern-stack-development",
    "/services/nextjs-development",
    "/services/react-development",
    "/services/nodejs-development",
    "/services/saas-development",
    "/services/custom-software-development",
    "/services/web-application-development",
    "/services/api-development",
    "/services/cloud-architecture",
    "/services/mvp-development",

    // Industry Pages
    "/industries/startups",
    "/industries/saas",
    "/industries/ecommerce",
    "/industries/business-automation",

    // Case Studies
    "/case-studies/enterprise-rag-agent-pipeline",
    "/case-studies/realtime-ecommerce-engine",
    "/case-studies/global-payment-routing-engine",
    "/case-studies/streaming-event-analytics",

    // Technical Blog & Guides
    "/blog/nextjs-16-turbopack-production-architecture-guide",
    "/blog/autonomous-ai-agents-langchain-langgraph-guide",
    "/blog/ai-software-development-cost-guide",
    "/blog/how-to-build-an-ai-saas-product",
    "/blog/ai-agent-vs-traditional-automation",
    "/blog/enterprise-rag-architecture-explained",
    "/blog/mern-stack-vs-nextjs-for-saas",
    "/blog/custom-ai-software-vs-off-the-shelf-tools",
  ];

  return routes.map((route) => {
    let priority = 0.7;
    let changeFrequency: "daily" | "weekly" | "monthly" = "weekly";

    if (route === "") {
      priority = 1.0;
      changeFrequency = "daily";
    } else if (route.startsWith("/services")) {
      priority = 0.9;
    } else if (route.startsWith("/case-studies") || route.startsWith("/blog")) {
      priority = 0.8;
    } else if (route === "/about" || route === "/contact") {
      priority = 0.8;
    }

    return {
      url: `${SITE_URL}${route}`,
      lastModified,
      changeFrequency,
      priority,
    };
  });
}
