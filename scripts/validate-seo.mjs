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

// 3. XML Sitemap Implementation
console.log("\n--- 3. XML Sitemap Structure & Completeness ---");
const sitemapFile = path.join(rootDir, "src/app/sitemap.ts");
const sitemapContent = fs.readFileSync(sitemapFile, "utf-8");
assert(sitemapContent.includes("locationPages"), "sitemap.ts maps all location pages");
assert(sitemapContent.includes("/privacy-policy"), "sitemap.ts includes /privacy-policy");
assert(sitemapContent.includes("/terms"), "sitemap.ts includes /terms");
assert(sitemapContent.includes("/html-sitemap"), "sitemap.ts includes /html-sitemap");
assert(sitemapContent.includes("servicePages"), "sitemap.ts maps all service pages");

// 4. Schema.org JSON-LD Verification
console.log("\n--- 4. Schema.org Structured Data Verification ---");
const schemaFile = path.join(rootDir, "src/lib/schema.ts");
const schemaContent = fs.readFileSync(schemaFile, "utf-8");
assert(schemaContent.includes("Sector 62, Electronic City"), "Schema.org Organization specifies local address in Noida");
assert(schemaContent.includes('postalCode: "201301"'), "Schema.org Organization has valid postal code");
assert(schemaContent.includes("generateLocalBusinessSchema"), "Schema.org helper includes generateLocalBusinessSchema");
assert(schemaContent.includes("generateBreadcrumbSchema"), "Schema.org helper includes generateBreadcrumbSchema");

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
  "src/app/services/ai-application-development/page.tsx",
  "src/app/services/ai-chatbot-development/page.tsx",
  "src/app/services/llm-integration/page.tsx",
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

// 7. Trust & Legal Pages
console.log("\n--- 7. Trust & Legal Pages (Privacy Policy & Terms) ---");
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

// 8. AI Generative Discovery Files
console.log("\n--- 8. AI Generative Discovery Files (llms.txt) ---");
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
