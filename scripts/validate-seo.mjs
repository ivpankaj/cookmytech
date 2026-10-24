import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

console.log("==================================================");
console.log("🚀 STARTING AUTOMATED TECHNICAL SEO AUDIT & VALIDATION");
console.log("==================================================\n");

let passedTests = 0;
let totalTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    console.log(`✅ [PASS] ${message}`);
    passedTests++;
  } else {
    console.error(`❌ [FAIL] ${message}`);
  }
}

// 1. Robots.txt Validation
console.log("\n--- 1. Robots Directives Validation ---");
const robotsFile = path.join(rootDir, "src/app/robots.ts");
const robotsContent = fs.readFileSync(robotsFile, "utf-8");
assert(!robotsContent.includes('"_next"'), "Robots.ts does NOT block /_next/ rendering assets from search crawlers");
assert(robotsContent.includes("sitemap: `${SITE_URL}/sitemap.xml`"), "Robots.ts correctly specifies the sitemap.xml endpoint");
assert(robotsContent.includes("Googlebot"), "Robots.ts explicitly configures Googlebot permissions");

// 2. Next.config.ts Redirects & Headers
console.log("\n--- 2. Next.config.ts Redirects & Headers ---");
const nextConfigFile = path.join(rootDir, "next.config.ts");
const nextConfigContent = fs.readFileSync(nextConfigFile, "utf-8");
assert(nextConfigContent.includes("async redirects()"), "next.config.ts includes redirects configuration");
assert(nextConfigContent.includes('destination: "/case-studies"'), "next.config.ts includes 301 permanent redirect for /portfolio");
assert(nextConfigContent.includes("Strict-Transport-Security"), "next.config.ts includes HSTS security headers");
assert(nextConfigContent.includes("/blog/how-to-build-an-ai-saas-product"), "next.config.ts includes 301 redirects for legacy blog posts");
assert(nextConfigContent.includes("/blog/ai-agent-vs-traditional-automation"), "next.config.ts includes 301 redirect for ai-agent-vs-traditional-automation");
assert(nextConfigContent.includes("/blog/enterprise-rag-architecture-explained"), "next.config.ts includes 301 redirect for enterprise-rag-architecture-explained");
assert(nextConfigContent.includes("/blog/mern-stack-vs-nextjs-for-saas"), "next.config.ts includes 301 redirect for mern-stack-vs-nextjs-for-saas");
assert(nextConfigContent.includes("/blog/custom-ai-software-vs-off-the-shelf-tools"), "next.config.ts includes 301 redirect for custom-ai-software-vs-off-the-shelf-tools");

// 3. XML Sitemap Implementation
console.log("\n--- 3. XML Sitemap Structure & Completeness ---");
const sitemapFile = path.join(rootDir, "src/app/sitemap.ts");
const sitemapContent = fs.readFileSync(sitemapFile, "utf-8");
assert(sitemapContent.includes("locationPages"), "sitemap.ts maps all location pages");
assert(sitemapContent.includes("/privacy-policy"), "sitemap.ts includes /privacy-policy");
assert(sitemapContent.includes("/terms"), "sitemap.ts includes /terms");
assert(sitemapContent.includes("/html-sitemap"), "sitemap.ts includes /html-sitemap");
assert(sitemapContent.includes("servicePages"), "sitemap.ts maps all service pages");
assert(sitemapContent.includes("blogPages"), "sitemap.ts dynamically maps blog pages");

// 4. Schema.org Structured Data Verification
console.log("\n--- 4. Schema.org Structured Data Verification ---");
const schemaFile = path.join(rootDir, "src/lib/schema.ts");
const schemaContent = fs.readFileSync(schemaFile, "utf-8");
assert(schemaContent.includes("Sector 62, Electronic City"), "Schema.org Organization specifies local address in Noida");
assert(schemaContent.includes('postalCode: "201301"'), "Schema.org Organization has valid postal code");
assert(schemaContent.includes("generateLocalBusinessSchema"), "Schema.org helper includes generateLocalBusinessSchema");
assert(schemaContent.includes("generateBreadcrumbSchema"), "Schema.org helper includes generateBreadcrumbSchema");
assert(schemaContent.includes("generateArticleSchema"), "Schema.org helper includes generateArticleSchema");

// 5. Locations Directory & Pages
console.log("\n--- 5. Regional & Local Location Landing Pages ---");
const locationPaths = [
  "src/app/locations/page.tsx",
  "src/app/locations/noida/page.tsx",
  "src/app/locations/greater-noida/page.tsx",
  "src/app/locations/delhi-ncr/page.tsx",
  "src/app/locations/india/page.tsx",
];

locationPaths.forEach((relPath) => {
  const fullPath = path.join(rootDir, relPath);
  const exists = fs.existsSync(fullPath);
  assert(exists, `Location route file exists: ${relPath}`);
  if (exists) {
    const content = fs.readFileSync(fullPath, "utf-8");
    assert(content.includes("constructMetadata"), `${relPath} generates self-referencing canonical metadata`);
    assert(content.includes("<h1"), `${relPath} contains an H1 heading`);
    assert(content.includes("Breadcrumbs"), `${relPath} includes accessible Breadcrumbs navigation`);
  }
});

// 6. High-Intent Commercial Service Pages
console.log("\n--- 6. High-Intent Commercial Service Pages ---");
const servicePaths = [
  "src/app/services/ai-agent-development/page.tsx",
  "src/app/services/rag-development/page.tsx",
  "src/app/services/saas-development/page.tsx",
  "src/app/services/mvp-development/page.tsx",
  "src/app/services/nextjs-development/page.tsx",
  "src/app/services/mern-stack-development/page.tsx",
  "src/app/services/api-development/page.tsx",
  "src/app/services/cloud-architecture/page.tsx",
  "src/app/services/ai-software-development/page.tsx",
  "src/app/services/custom-software-development/page.tsx",
  "src/app/services/full-stack-development/page.tsx",
  "src/app/services/ai-development/page.tsx",
];

servicePaths.forEach((relPath) => {
  const fullPath = path.join(rootDir, relPath);
  const exists = fs.existsSync(fullPath);
  assert(exists, `Commercial service route exists: ${relPath}`);
  if (exists) {
    const content = fs.readFileSync(fullPath, "utf-8");
    assert(content.includes("generateServiceSchema"), `${relPath} implements Schema.org Service markup`);
    assert(content.includes("generateFaqSchema"), `${relPath} implements Schema.org FAQPage markup`);
    assert(content.includes("<h1"), `${relPath} contains an H1 heading`);
  }
});

// 7. Informational Content & Technical Guides (25 Articles)
console.log("\n--- 7. Informational Content & Technical Guides ---");
const blogHubFile = path.join(rootDir, "src/app/blog/page.tsx");
const blogHubContent = fs.readFileSync(blogHubFile, "utf-8");
assert(blogHubContent.includes("what-are-ai-agents-and-how-do-they-work"), "Blog hub includes AI Agent Guide");
assert(blogHubContent.includes("software-development-cost-comparisons"), "Blog hub includes Software Cost Comparisons");
assert(blogHubContent.includes("how-to-build-a-rag-application"), "Blog hub includes RAG Application Guide");

const blogContentFile = path.join(rootDir, "src/lib/blogContent.ts");
const blogContentAgg = fs.readFileSync(blogContentFile, "utf-8");
assert(blogContentAgg.includes("customBlogArticles"), "blogContent.ts exports customBlogArticles map");
assert(blogContentAgg.includes("aiEngineeringArticles"), "blogContent.ts aggregates AI engineering articles");
assert(blogContentAgg.includes("saasStartupsArticles"), "blogContent.ts aggregates SaaS & startup articles");
assert(blogContentAgg.includes("webEngineeringArticles"), "blogContent.ts aggregates web engineering articles");
assert(blogContentAgg.includes("techStatsArticles"), "blogContent.ts aggregates tech statistics articles");

// 8. Internal Linking & Crawl Equity (Homepage & Footer)
console.log("\n--- 8. Internal Linking & Crawl Equity Optimization ---");
const homePageFile = path.join(rootDir, "src/app/page.tsx");
const homePageContent = fs.readFileSync(homePageFile, "utf-8");
assert(homePageContent.includes("FeaturedGuides"), "Homepage imports and renders FeaturedGuides section");

const carouselFile = path.join(rootDir, "src/components/ProjectCarousel.tsx");
const carouselContent = fs.readFileSync(carouselFile, "utf-8");
assert(carouselContent.includes("global-payment-routing-engine"), "ProjectCarousel links directly to global-payment-routing-engine");
assert(carouselContent.includes("enterprise-rag-agent-pipeline"), "ProjectCarousel links directly to enterprise-rag-agent-pipeline");

const footerFile = path.join(rootDir, "src/components/Footer.tsx");
const footerContent = fs.readFileSync(footerFile, "utf-8");
assert(footerContent.includes("/case-studies/global-payment-routing-engine"), "Footer includes site-wide link to global-payment-routing-engine");
assert(footerContent.includes("/blog/autonomous-ai-agents-langchain-langgraph-guide"), "Footer includes site-wide link to autonomous-ai-agents-langchain-langgraph-guide");
assert(footerContent.includes("/blog/nextjs-16-turbopack-production-architecture-guide"), "Footer includes site-wide link to nextjs-16-turbopack-production-architecture-guide");

// 9. RSS Feed & Fast Indexing Endpoint
console.log("\n--- 9. RSS Feed & Syndication Discovery ---");
const feedRouteFile = path.join(rootDir, "src/app/feed.xml/route.ts");
assert(fs.existsSync(feedRouteFile), "RSS Feed route /feed.xml exists");

const layoutFile = path.join(rootDir, "src/app/layout.tsx");
const layoutContent = fs.readFileSync(layoutFile, "utf-8");
assert(layoutContent.includes("application/rss+xml"), "Root layout declares RSS feed link in head alternates");

// 10. Case Studies Structured Data & Cross-Links
console.log("\n--- 10. Case Studies Technical SEO ---");
const caseStudyDetailFile = path.join(rootDir, "src/app/case-studies/[project]/page.tsx");
const caseStudyContent = fs.readFileSync(caseStudyDetailFile, "utf-8");
assert(caseStudyContent.includes("generateArticleSchema"), "Case studies implement Schema.org JSON-LD");
assert(caseStudyContent.includes("otherCaseStudies"), "Case studies include cross-links to other production builds");

// 11. Trust & Legal Pages
console.log("\n--- 11. Trust & Legal Pages (Privacy Policy & Terms) ---");
const legalPaths = [
  "src/app/privacy-policy/page.tsx",
  "src/app/terms/page.tsx",
];

legalPaths.forEach((relPath) => {
  const fullPath = path.join(rootDir, relPath);
  const exists = fs.existsSync(fullPath);
  assert(exists, `Legal route exists: ${relPath}`);
  if (exists) {
    const content = fs.readFileSync(fullPath, "utf-8");
    assert(content.includes("constructMetadata"), `${relPath} contains canonical metadata`);
    assert(content.includes("<h1"), `${relPath} contains an H1 heading`);
  }
});

// 12. AI Generative Discovery Files
console.log("\n--- 12. AI Generative Discovery Files (llms.txt) ---");
const llmsTxtFile = path.join(rootDir, "public/llms.txt");
const llmsFullFile = path.join(rootDir, "public/llms-full.txt");
assert(fs.existsSync(llmsTxtFile), "public/llms.txt exists");
assert(fs.existsSync(llmsFullFile), "public/llms-full.txt exists");

console.log("\n==================================================");
console.log(`📊 AUDIT SUMMARY: ${passedTests} / ${totalTests} TESTS PASSED`);
console.log("==================================================");

if (passedTests === totalTests) {
  console.log("🎉 ALL AUTOMATED TECHNICAL SEO CHECKS PASSED SUCCESSFULLY!\n");
  process.exit(0);
} else {
  console.error("⚠️ SOME SEO VALIDATIONS FAILED. PLEASE REVIEW LOGS ABOVE.\n");
  process.exit(1);
}
