import React from "react";
import Link from "next/link";
import { generateBreadcrumbSchema, BreadcrumbItem } from "@/lib/schema";

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schemaData = generateBreadcrumbSchema(items);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <nav aria-label="Breadcrumb" className="py-4 border-b border-gray-200 text-xs font-mono">
        <ol className="flex items-center flex-wrap gap-2 text-gray-600">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.item} className="flex items-center gap-2">
                {index > 0 && <span className="text-gray-400">/</span>}
                {isLast ? (
                  <span className="font-bold text-black uppercase" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.item}
                    className="hover:text-black hover:underline uppercase transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
