import type { ZennArticle } from "@/types/zenn";
import type { Order } from "@/types/zenn";

export type ZennSortArticlesProps = {
  articles: ZennArticle[];
  sortKey: keyof ZennArticle;
  order?: Order;
  searchQuery?: string;
};

export function sortArticles({
  articles,
  sortKey,
  order = "desc",
  searchQuery,
}: ZennSortArticlesProps) {
  const filteredArticles = filterArticles(articles, searchQuery);
  return sortArticlesByKey(filteredArticles, sortKey, order);
}

function filterArticles(articles: ZennArticle[], searchQuery?: string) {
  if (!searchQuery) return articles;
  return articles.filter((articles) =>
    articles.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
}

function sortArticlesByKey(
  articles: ZennArticle[],
  sortKey: keyof ZennArticle,
  order = "desc" as Order
) {
  return [...articles].sort((a, b) => {
    const aValue = a[sortKey];
    const bValue = b[sortKey];
    if (typeof aValue === "number" && typeof bValue === "number") {
      return sortNumberKey(aValue, bValue, order);
    }
    if (typeof aValue === "string" && typeof bValue === "string") {
      return sortStringKey(aValue, bValue, order);
    }
    return 0;
  });
}

function sortNumberKey(a: number, b: number, order: Order) {
  return order === "asc" ? a - b : b - a;
}

function sortStringKey(a: string, b: string, order: Order) {
  return order === "asc" ? a.localeCompare(b) : b.localeCompare(a);
}
