import type { Metadata, Viewport } from "next";
import { Syne, JetBrains_Mono } from "next/font/google";
import Analytics from "@/components/Analytics";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://cookmytech.com";

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CookMyTech | Production Web Apps & AI Software Studio",
    template: "%s | CookMyTech",
  },
  description:
    "CookMyTech is a premier full-stack engineering studio specializing in production web applications, custom AI software, LLM integrations, cloud architecture, and high-concurrency API engineering.",
  keywords: [
    "CookMyTech",
    "Full-Stack Development Studio",
    "AI Software Engineering",
    "Next.js Development",
    "TypeScript Engineers",
    "LLM Integration",
    "RAG Pipelines",
    "System Architecture",
    "Cloud Infrastructure",
    "React Developers",
    "Custom Web Applications",
    "API Integrations",
  ],
  authors: [{ name: "CookMyTech Team", url: siteUrl }],
  creator: "CookMyTech",
  publisher: "CookMyTech",
  category: "technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "CookMyTech | Production Web Apps & AI Software Studio",
    description:
      "Production-grade web apps and AI-powered software engineered by senior specialists who build for high load, zero downtime, and top performance.",
    url: siteUrl,
    siteName: "CookMyTech",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "CookMyTech Full-Stack & AI Software Engineering Studio Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CookMyTech | Production Web Apps & AI Software Studio",
    description:
      "Production-grade web apps and AI-powered software engineered by senior specialists.",
    creator: "@cookmytech",
    images: ["/logo.png"],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-black font-mono">
        <Analytics />
        {children}
      </body>
    </html>
  );
}

