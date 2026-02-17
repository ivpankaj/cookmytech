import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Script from "next/script";

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
  icons: {
    icon: "/favicon.ico",
  },
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
        url: "/og-image.png",
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
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: "./",
  },
  verification: {
    google: [
      "cFZmG_ZDsn2CRz9dEiRh5_lKBRooRgVaQkyaiTsPj5U",
      "HkYS3evi3jqymwePJIQD6Ym4GZGNKhG28ZPB_K1ZfsY",
    ],
  },
  category: 'technology',
  metadataBase: new URL('https://cookmytech.site'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-24GS1YENM0"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-24GS1YENM0');
          `}
        </Script>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-7K5K6B0VTE"
        />
        <Script
          id="google-analytics-new"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-7K5K6B0VTE');
          `}
        </Script>
        <JsonLd />
        {children}
        <Footer />
      </body>
    </html>
  );
}
