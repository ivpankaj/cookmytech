import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Cookmytech | Software Solutions in Noida | Web, AI & IT Services",
    template: "%s | Cookmytech"
  },

  description:
    "Cookmytech is a leading software solutions company in Noida founded by Pankaj Verma. We specialize in website development, AI tools, SaaS solutions, mobile apps, branding, and enterprise-grade tech systems.",

  keywords: [
    "software solutions",
    "software company in Noida",
    "website development company",
    "AI tools",
    "IT services Noida",
    "custom software development",
    "SaaS development",
    "startup tech solutions",
    "enterprise software",
    "Cookmytech",
    "Cookmypapers",
    "Cookmyai",
    "Cookmywebsite",
    "Cookmymedia"
  ],

  authors: [{ name: "Pankaj Verma", url: "https://cookmytech.site" }],

  creator: "Pankaj Verma",
  publisher: "Cookmytech",

  openGraph: {
    title: "Cookmytech – Software Solutions & Website Development in Noida",
    description:
      "Software Solutions, Website Development, AI Products, SaaS Tools, Branding & More. Cookmytech delivers quality tech services for startups and enterprises.",
    url: "https://cookmytech.site",
    siteName: "Cookmytech",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://cookmytech.site/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cookmytech Software Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cookmytech | Leading Software Solutions in Noida",
    description:
      "Software development, website building, AI solutions & SaaS services by Cookmytech.",
    images: ["https://cookmytech.site/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  alternates: {
    canonical: "https://cookmytech.site",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
