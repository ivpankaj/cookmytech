import { CustomBlogArticle } from "./articles/types";
import { aiEngineeringArticles } from "./articles/aiEngineering";
import { saasStartupsArticles } from "./articles/saasStartups";
import { webEngineeringArticles } from "./articles/webEngineering";
import { techStatsArticles } from "./articles/techStats";
import { existingArticles } from "./articles/existingArticles";

export type { CustomBlogArticle } from "./articles/types";

export const customBlogArticles: Record<string, CustomBlogArticle> = {
  ...existingArticles,
  ...aiEngineeringArticles,
  ...saasStartupsArticles,
  ...webEngineeringArticles,
  ...techStatsArticles,
};
