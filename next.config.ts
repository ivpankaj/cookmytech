import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  reactCompiler: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
  },
  async redirects() {
    return [
      {
        source: "/portfolio",
        destination: "/case-studies",
        permanent: true,
      },
      {
        source: "/portfolio/:slug*",
        destination: "/case-studies/:slug*",
        permanent: true,
      },
      // Legacy blog article permanent 301 redirects to canonical in-depth guides
      {
        source: "/blog/ai-software-development-cost-guide",
        destination: "/blog/software-development-cost-comparisons",
        permanent: true,
      },
      {
        source: "/blog/how-to-build-an-ai-saas-product",
        destination: "/blog/how-to-build-a-saas-mvp",
        permanent: true,
      },
      {
        source: "/blog/ai-agent-vs-traditional-automation",
        destination: "/blog/what-are-ai-agents-and-how-do-they-work",
        permanent: true,
      },
      {
        source: "/blog/enterprise-rag-architecture-explained",
        destination: "/blog/how-to-build-a-rag-application",
        permanent: true,
      },
      {
        source: "/blog/mern-stack-vs-nextjs-for-saas",
        destination: "/blog/nextjs-vs-react-for-production-applications",
        permanent: true,
      },
      {
        source: "/blog/custom-ai-software-vs-off-the-shelf-tools",
        destination: "/blog/custom-software-vs-off-the-shelf-software",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
      {
        source: "/sitemap.xml",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400",
          },
        ],
      },
      {
        source: "/robots.txt",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
