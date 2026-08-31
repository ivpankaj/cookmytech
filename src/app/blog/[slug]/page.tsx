import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { constructMetadata } from "@/lib/metadata";
import { generateArticleSchema } from "@/lib/schema";
import { blogPostsData } from "../page";
import { customBlogArticles } from "@/lib/blogContent";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPostsData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const post = blogPostsData.find((item) => item.slug === resolvedParams.slug);
  if (!post) return {};

  return constructMetadata({
    title: `${post.title} | CookMyTech Technical Guide`,
    description: post.description,
    path: `/blog/${post.slug}`,
    ogType: "article",
    publishedTime: post.date,
  });
}

export default async function BlogPostDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const post = blogPostsData.find((item) => item.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const customArticle = customBlogArticles[post.slug];
  const postUrl = `https://www.cookmytech.site/blog/${post.slug}`;
  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.description,
    url: postUrl,
    datePublished: post.date,
  });

  return (
    <div className="bg-white text-black min-h-screen font-mono flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Navbar />
      <main id="main-content" className="flex-1 max-w-screen-xl mx-auto px-6 py-16 w-full">
        <Breadcrumbs
          items={[
            { name: "Home", item: "/" },
            { name: "Technical Guides", item: "/blog" },
            { name: post.title, item: `/blog/${post.slug}` },
          ]}
        />

        <article className="max-w-4xl py-12 border-b border-black">
          <div className="flex items-center gap-4 text-xs mb-4">
            <span className="bg-black text-white px-3 py-1 font-bold uppercase">
              {post.category}
            </span>
            <span className="text-gray-500 font-mono">Published {post.date}</span>
            <span className="text-gray-500 font-mono">• {post.readTime}</span>
          </div>

          <h1 className="font-display text-[clamp(2rem,4.5vw,4rem)] font-bold leading-tight uppercase mb-6" style={{ fontWeight: 800 }}>
            {post.title}
          </h1>

          <p className="text-sm md:text-base leading-relaxed text-gray-700 font-bold mb-10 pb-6 border-b border-gray-200">
            {post.description}
          </p>

          {/* CUSTOM LONG FORM ARTICLE CONTENT WITH 2 IMAGES */}
          {customArticle ? (
            <div className="space-y-12 text-xs md:text-sm leading-relaxed text-gray-800">
              {/* SECTION 1 */}
              {customArticle.sections[0] && (
                <section className="space-y-4">
                  <h2 className="font-display text-2xl font-bold uppercase text-black">
                    {customArticle.sections[0].title}
                  </h2>
                  {customArticle.sections[0].content.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </section>
              )}

              {/* IMAGE 1 */}
              <figure className="my-8 border border-black p-3 bg-black">
                <img
                  src={customArticle.image1.src}
                  alt={customArticle.image1.alt}
                  className="w-full h-auto object-cover rounded-none"
                />
                <figcaption className="mt-3 text-xs text-gray-400 font-mono text-center">
                  {customArticle.image1.caption}
                </figcaption>
              </figure>

              {/* SECTION 2 */}
              {customArticle.sections[1] && (
                <section className="space-y-4">
                  <h2 className="font-display text-2xl font-bold uppercase text-black">
                    {customArticle.sections[1].title}
                  </h2>
                  {customArticle.sections[1].content.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}

                  {customArticle.sections[1].codeSnippet && (
                    <div className="my-4 p-4 bg-black text-green-400 font-mono text-xs overflow-x-auto border border-black">
                      <pre><code>{customArticle.sections[1].codeSnippet.code}</code></pre>
                    </div>
                  )}
                </section>
              )}

              {/* IMAGE 2 */}
              <figure className="my-8 border border-black p-3 bg-black">
                <img
                  src={customArticle.image2.src}
                  alt={customArticle.image2.alt}
                  className="w-full h-auto object-cover rounded-none"
                />
                <figcaption className="mt-3 text-xs text-gray-400 font-mono text-center">
                  {customArticle.image2.caption}
                </figcaption>
              </figure>

              {/* REMAINING SECTIONS */}
              {customArticle.sections.slice(2).map((sec, idx) => (
                <section key={idx} className="space-y-4">
                  <h2 className="font-display text-2xl font-bold uppercase text-black">
                    {sec.title}
                  </h2>
                  {sec.content.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                  {sec.codeSnippet && (
                    <div className="my-4 p-4 bg-black text-green-400 font-mono text-xs overflow-x-auto border border-black">
                      <pre><code>{sec.codeSnippet.code}</code></pre>
                    </div>
                  )}
                </section>
              ))}

              {/* TAKEAWAYS BOX */}
              <section className="p-6 border border-black bg-gray-50">
                <h3 className="font-display text-lg font-bold uppercase mb-4 text-black">
                  // Core Architecture Takeaways
                </h3>
                <ul className="space-y-2 text-xs">
                  {customArticle.takeaways.map((takeaway, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-2">
                      <span className="text-black font-bold">•</span>
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          ) : (
            /* DEFAULT TEMPLATE FOR PRE-EXISTING BLOGS */
            <div className="space-y-8 text-xs md:text-sm leading-relaxed text-gray-800">
              <section>
                <h2 className="font-display text-2xl font-bold uppercase mb-4 text-black">
                  1. Executive Overview & Technical Context
                </h2>
                <p className="mb-4">
                  Building commercial software applications in 2026 requires making disciplined architectural decisions early. Whether you are estimating AI development costs or choosing between Next.js and MERN stack, your tech stack choices directly impact hosting costs, developer velocity, and search engine visibility.
                </p>
                <p>
                  At CookMyTech, we engineer software applications with zero technical debt, predictable fixed-scope pricing, and strict performance targets.
                </p>
              </section>

              <section className="p-6 border border-black bg-gray-50">
                <h3 className="font-display text-lg font-bold uppercase mb-2">Key Technical Takeaways</h3>
                <ul className="space-y-2 text-xs">
                  <li>• Always implement token rate limiting and semantic caching to protect AI profit margins.</li>
                  <li>• Prefer Server-Side Rendering (SSR) via Next.js for core commercial landing pages.</li>
                  <li>• Enforce deterministic schema parsing (JSON output) for AI agents and LLM integrations.</li>
                  <li>• Ensure 100% intellectual property and code repository ownership from day one.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold uppercase mb-4 text-black">
                  2. Recommended Engineering Next Steps
                </h2>
                <p className="mb-4">
                  Ready to turn these architectural principles into production code? Explore our specialized engineering services or talk directly with our senior development team.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <Link href="/services/ai-development" className="p-4 border border-black hover:bg-black hover:text-white transition-colors">
                    <div className="font-bold mb-1">AI Development Services →</div>
                    <div className="text-xs text-gray-500 hover:text-gray-300">Custom AI applications & LLM pipelines</div>
                  </Link>
                  <Link href="/services/saas-development" className="p-4 border border-black hover:bg-black hover:text-white transition-colors">
                    <div className="font-bold mb-1">SaaS Development Services →</div>
                    <div className="text-xs text-gray-500 hover:text-gray-300">Multi-tenant platforms & Stripe engines</div>
                  </Link>
                </div>
              </section>
            </div>
          )}
        </article>

        {/* CTA */}
        <div className="bg-black text-white p-8 border border-black flex flex-col md:flex-row items-center justify-between gap-6 mt-12">
          <div>
            <h2 className="font-display text-xl font-bold uppercase">Need Architecture Advice for Your Project?</h2>
            <p className="text-xs text-gray-400 mt-1">Get an actionable technical roadmap within 24 hours.</p>
          </div>
          <Link href="/contact" className="bg-white text-black text-xs uppercase tracking-widest px-8 py-3.5 font-bold hover:bg-gray-200 transition-colors whitespace-nowrap">
            Schedule Engineering Call →
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
