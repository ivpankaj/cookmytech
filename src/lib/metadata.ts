import type { Metadata } from "next";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  "https://www.cookmytech.site";

export interface GenerateMetadataOptions {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogType?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
}

export function constructMetadata({
  title,
  description,
  path,
  keywords = [],
  ogType = "website",
  publishedTime,
  modifiedTime,
  noIndex = false,
}: GenerateMetadataOptions): Metadata {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const canonicalUrl = `${SITE_URL}${cleanPath === "/" ? "" : cleanPath}`;

  const defaultKeywords = [
    "CookMyTech",
    "AI Software Development",
    "Full-Stack Software Engineering",
    "SaaS Development",
    "AI Agent Development",
    "RAG Applications",
    "LLM Integration",
    "Next.js Development Studio",
    "MERN Stack Development",
    "Custom Software Engineering",
  ];

  const mergedKeywords = Array.from(
    new Set([...keywords, ...defaultKeywords])
  );

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      absolute: `${title} | CookMyTech`,
    },
    description,
    keywords: mergedKeywords,
    authors: [{ name: "CookMyTech Engineering Team", url: SITE_URL }],
    creator: "CookMyTech",
    publisher: "CookMyTech",
    category: "technology",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${title} | CookMyTech`,
      description,
      url: canonicalUrl,
      siteName: "CookMyTech",
      images: [
        {
          url: `${SITE_URL}/logo.png`,
          width: 512,
          height: 512,
          alt: "CookMyTech Full-Stack & AI Software Engineering Studio Logo",
        },
      ],
      locale: "en_US",
      type: ogType,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | CookMyTech`,
      description,
      creator: "@cookmytech",
      images: [`${SITE_URL}/logo.png`],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
