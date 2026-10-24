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
  const postUrl = `https://www.cookmytech.com/blog/${post.slug}`;
  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.description,
    url: postUrl,
    datePublished: post.date,
    authorName: customArticle?.author?.name || "CookMyTech Engineering Team",
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
          <div className="flex flex-wrap items-center gap-3 text-xs mb-4">
            <span className="bg-black text-white px-3 py-1 font-bold uppercase tracking-wider">
              {post.category}
            </span>
            <span className="text-gray-500 font-mono">Published {post.date}</span>
            <span className="text-gray-500 font-mono">• {post.readTime}</span>
            {customArticle?.author && (
              <span className="text-gray-700 font-mono bg-gray-100 px-2 py-0.5 border border-gray-300">
                Author: {customArticle.author.name} ({customArticle.author.role})
              </span>
            )}
          </div>

          <h1 className="font-display text-[clamp(2rem,4.5vw,3.8rem)] font-bold leading-tight uppercase mb-6" style={{ fontWeight: 800 }}>
            {post.title}
          </h1>

          <p className="text-sm md:text-base leading-relaxed text-gray-700 font-bold mb-8 pb-6 border-b border-gray-200">
            {post.description}
          </p>

          {/* TARGET AUDIENCE CALLOUT */}
          {customArticle?.targetAudience && (
            <div className="mb-10 p-5 bg-gray-50 border-l-4 border-black text-xs md:text-sm text-gray-800">
              <span className="font-bold text-black uppercase tracking-wider block mb-1">
                // Target Audience & Technical Intent:
              </span>
              <p>{customArticle.targetAudience}</p>
            </div>
          )}

          {/* ARTICLE CONTENT */}
          {customArticle ? (
            <div className="space-y-12 text-xs md:text-sm leading-relaxed text-gray-800">
              {customArticle.sections.map((sec, secIdx) => (
                <section key={secIdx} className="space-y-4">
                  <h2 className="font-display text-2xl font-bold uppercase text-black pt-4 border-t border-gray-100">
                    {sec.title}
                  </h2>

                  {sec.content.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}

                  {/* SUBSECTIONS */}
                  {sec.subsections && sec.subsections.length > 0 && (
                    <div className="space-y-4 mt-4 pl-4 border-l-2 border-gray-300">
                      {sec.subsections.map((sub, subIdx) => (
                        <div key={subIdx} className="space-y-2">
                          <h3 className="font-display text-lg font-bold uppercase text-black">
                            {sub.title}
                          </h3>
                          {sub.content.map((subP, subPIdx) => (
                            <p key={subPIdx}>{subP}</p>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* CODE SNIPPET */}
                  {sec.codeSnippet && (
                    <div className="my-4 border border-black bg-black text-green-400 font-mono text-xs overflow-hidden">
                      <div className="bg-neutral-900 text-gray-400 px-4 py-1.5 text-[11px] border-b border-neutral-800 flex justify-between items-center">
                        <span className="uppercase tracking-wider font-bold">
                          {sec.codeSnippet.language}
                        </span>
                        <span className="text-neutral-500">CookMyTech Code Spec</span>
                      </div>
                      <div className="p-4 overflow-x-auto">
                        <pre><code>{sec.codeSnippet.code}</code></pre>
                      </div>
                    </div>
                  )}

                  {/* DATA TABLE */}
                  {sec.table && (
                    <div className="my-6 border border-black overflow-x-auto bg-white">
                      {sec.table.caption && (
                        <div className="bg-black text-white px-4 py-2 font-bold text-xs uppercase tracking-wider">
                          {sec.table.caption}
                        </div>
                      )}
                      <table className="w-full text-left text-xs border-collapse">
                        <thead>
                          <tr className="bg-gray-100 border-b border-black">
                            {sec.table.headers.map((h, hIdx) => (
                              <th key={hIdx} className="p-3 font-bold border-r border-gray-200 last:border-r-0 uppercase">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {sec.table.rows.map((row, rIdx) => (
                            <tr key={rIdx} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                              {row.map((cell, cIdx) => (
                                <td key={cIdx} className="p-3 border-r border-gray-200 last:border-r-0">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* CONDITIONAL FIGURES IF PROVIDED */}
                  {secIdx === 0 && customArticle.image1 && (
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
                  )}

                  {secIdx === 1 && customArticle.image2 && (
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
                  )}
                </section>
              ))}

              {/* CORE TAKEAWAYS */}
              <section className="p-6 border border-black bg-gray-50 mt-10">
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

              {/* CITATIONS & METHODOLOGY */}
              {customArticle.citations && customArticle.citations.length > 0 && (
                <section className="p-6 border border-gray-300 bg-neutral-50 text-xs mt-8">
                  <h4 className="font-bold uppercase tracking-wider text-black mb-3">
                    References, Research Citations & Data Sources
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    {customArticle.citations.map((cite, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-2">
                        <span className="text-gray-400">[{cIdx + 1}]</span>
                        <span>
                          <strong className="text-gray-800">{cite.source}</strong> ({cite.year || "2025/2026"}): {cite.detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* RELATED SERVICES CROSS-LINKS */}
              {customArticle.relatedServices && customArticle.relatedServices.length > 0 && (
                <section className="mt-12 pt-8 border-t border-black">
                  <h3 className="font-display text-xl font-bold uppercase mb-6 text-black">
                    Relevant CookMyTech Engineering Services
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {customArticle.relatedServices.map((srv, sIdx) => (
                      <Link
                        key={sIdx}
                        href={srv.href}
                        className="p-5 border border-black hover:bg-black hover:text-white transition-colors group flex flex-col justify-between"
                      >
                        <div>
                          <div className="font-bold text-sm mb-1 group-hover:text-white flex items-center justify-between">
                            <span>{srv.title}</span>
                            <span>→</span>
                          </div>
                          <p className="text-xs text-gray-600 group-hover:text-gray-300">
                            {srv.desc}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {/* RELATED TECHNICAL ARTICLES */}
              {customArticle.relatedArticles && customArticle.relatedArticles.length > 0 && (
                <section className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
                    Related Technical Guides
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {customArticle.relatedArticles.map((rel, rIdx) => (
                      <Link
                        key={rIdx}
                        href={rel.href}
                        className="text-xs font-bold underline hover:text-gray-600 transition-colors bg-gray-100 px-3 py-1.5 border border-gray-200"
                      >
                        {rel.title} →
                      </Link>
                    ))}
                  </div>
                </section>
              )}
            </div>
          ) : (
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
