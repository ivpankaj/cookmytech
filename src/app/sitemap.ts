import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/metadata";
import { blogPostsData } from "@/app/blog/page";
import { caseStudiesData } from "@/app/case-studies/page";
import { serviceCategories } from "@/app/services/page";
import { industriesData } from "@/app/industries/page";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Core Main Pages
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/case-studies`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/industries`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/html-sitemap`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  // 19 Dedicated Service Landing Pages
  const servicePages: MetadataRoute.Sitemap = serviceCategories.flatMap((category) =>
    category.services.map((service) => ({
      url: `${SITE_URL}${service.href}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    }))
  );

  // 4 Industry Solution Pages
  const industryPages: MetadataRoute.Sitemap = industriesData.map((industry) => ({
    url: `${SITE_URL}${industry.href}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // 4 Production Case Studies
  const caseStudyPages: MetadataRoute.Sitemap = caseStudiesData.map((study) => ({
    url: `${SITE_URL}/case-studies/${study.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // 8 In-Depth Technical Blog Articles & Guides (with actual publication dates)
  const blogPages: MetadataRoute.Sitemap = blogPostsData.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    ...mainPages,
    ...servicePages,
    ...industryPages,
    ...caseStudyPages,
    ...blogPages,
  ];
}
