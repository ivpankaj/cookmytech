# CookMyTech — Technical SEO Documentation & Search Console Guide

This document contains complete operational details for CookMyTech's technical SEO architecture, indexing directives, structured data schemas, Search Console setup instructions, and future growth strategies.

---

## 1. Key SEO Locations & Files

- **Base Production Domain**: `https://www.cookmytech.site`
- **XML Sitemap**: `https://www.cookmytech.site/sitemap.xml` (Generated dynamically via `src/app/sitemap.ts`)
- **Robots.txt**: `https://www.cookmytech.site/robots.txt` (Generated dynamically via `src/app/robots.ts`)
- **HTML Sitemap Index**: `https://www.cookmytech.site/html-sitemap`
- **Centralized Metadata Helper**: `src/lib/metadata.ts`
- **Schema.org JSON-LD Helper**: `src/lib/schema.ts`
- **Breadcrumb Component**: `src/components/Breadcrumbs.tsx`

---

## 2. Canonical & Metadata Strategy

1. **Self-Referencing Canonicals**:
   - Every indexable page uses `constructMetadata({ path: "/..." })` which automatically sets a clean, self-referencing canonical URL without query parameters or inconsistent trailing slashes.
2. **Title Template**:
   - All page titles follow natural branding: `[Page Title] | CookMyTech`.
3. **Open Graph & Twitter Cards**:
   - Standardized 1200x630/512x512 image previews, metadata base tags, locale `en_US`, and twitter card type `summary_large_image`.

---

## 3. Schema.org JSON-LD Architecture

- **Homepage (`/`)**:
  - `ProfessionalService` / `Organization` schema
  - `WebSite` schema
  - `FAQPage` schema
  - `BreadcrumbList` schema
- **Service Pages (`/services/*`)**:
  - `Service` schema (Name, provider, areaServed, termsOfService)
  - `BreadcrumbList` schema
  - `FAQPage` schema
- **Technical Blog Articles (`/blog/*`)**:
  - `TechArticle` schema
  - `BreadcrumbList` schema
- **Case Studies (`/case-studies/*`)**:
  - `BreadcrumbList` schema

---

## 4. Google Search Console Setup Instructions

### Step 1: Add Domain Property to Google Search Console
1. Log into [Google Search Console](https://search.google.com/search-console).
2. Click **Add Property**.
3. Choose **Domain** property type and enter `cookmytech.site` (or URL prefix `https://www.cookmytech.site`).
4. Copy the Google verification TXT record (or HTML meta tag).
5. If using HTML tag verification, add the verification string to your `.env.local` file:
   ```env
   NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-verification-string-here
   ```

### Step 2: Submit XML Sitemap
1. In Search Console, navigate to **Sitemaps** under the *Indexing* sidebar menu.
2. Under "Add a new sitemap", enter: `sitemap.xml`
3. Click **Submit**.
4. Verify that Google processes the sitemap with status **Success**.

### Step 3: Request Indexing for Key Target Landing Pages
1. Use the **URL Inspection** tool at the top of Search Console.
2. Enter the following key commercial URLs one by one:
   - `https://www.cookmytech.site/`
   - `https://www.cookmytech.site/services`
   - `https://www.cookmytech.site/services/ai-development`
   - `https://www.cookmytech.site/services/ai-agent-development`
   - `https://www.cookmytech.site/services/rag-development`
   - `https://www.cookmytech.site/services/saas-development`
   - `https://www.cookmytech.site/services/full-stack-development`
   - `https://www.cookmytech.site/services/mern-stack-development`
   - `https://www.cookmytech.site/services/nextjs-development`
3. Click **Request Indexing** for each priority URL.

### Step 4: Monitor Search Console Reports (Weekly / Monthly)
- **Coverage / Pages**: Check for any 404 errors, server errors, or unintended `noindex` flags.
- **Core Web Vitals**: Monitor LCP, INP, and CLS scores for Mobile and Desktop.
- **Rich Results**: Verify that valid `Breadcrumbs`, `FAQs`, `Sitemaps`, and `Articles` are recognized.
- **Performance**: Track organic search impressions, clicks, average CTR, and ranking positions for keywords like *AI agent development company*, *RAG development*, *SaaS development studio*, and *Next.js development*.

---

## 5. Recommended Future SEO Content Expansion

To continue building topical authority, consider publishing technical articles on the following topics:

1. *"How to Build an AI Chatbot With Your Own Documents Using RAG"*
2. *"LangChain vs LlamaIndex vs Custom Agent Loops in Production"*
3. *"How Much Does It Cost to Build an AI SaaS in 2026?"*
4. *"Stripe Subscription Architecture for Multi-Tenant Next.js SaaS"*
5. *"Fine-Tuning Open Source LLMs (Llama 3) vs OpenAI GPT-4o"*
6. *"How to Optimize Next.js App Router for 100/100 Google Lighthouse Scores"*
