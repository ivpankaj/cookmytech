export interface ArticleTable {
  headers: string[];
  rows: string[][];
  caption?: string;
}

export interface ArticleSection {
  title: string;
  content: string[];
  codeSnippet?: {
    language: string;
    code: string;
  };
  subsections?: {
    title: string;
    content: string[];
  }[];
  table?: ArticleTable;
}

export interface CustomBlogArticle {
  slug: string;
  targetAudience?: string;
  primaryKeyword?: string;
  searchIntent?: string;
  author?: {
    name: string;
    role: string;
  };
  image1?: {
    src: string;
    alt: string;
    caption: string;
  };
  image2?: {
    src: string;
    alt: string;
    caption: string;
  };
  sections: ArticleSection[];
  takeaways: string[];
  citations?: {
    source: string;
    detail: string;
    year?: string;
  }[];
  relatedServices?: {
    title: string;
    href: string;
    desc: string;
  }[];
  relatedArticles?: {
    title: string;
    href: string;
  }[];
}
