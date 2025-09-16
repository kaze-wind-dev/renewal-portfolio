import type { ZennArticle } from "@/types/zenn";

export type ZennSortArticlesProps = {
  articles: ZennArticle[];
  sortKey: keyof ZennArticle;
  order?: "asc" | "desc";
  searchQuery?: string;
};

export function sortArticles({
  articles,
  sortKey,
  order = "desc",
  searchQuery,
}: ZennSortArticlesProps) {
  const filteredArticles = searchQuery
    ? [...articles].filter((articles) =>
        articles.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : articles;
  const sortedArticles = [...filteredArticles].sort((a, b) => {
    const aValue = a[sortKey];
    const bValue = b[sortKey];
    if (typeof aValue === "number" && typeof bValue === "number") {
      if (order === "asc") {
        return aValue - bValue;
      } else {
        return bValue - aValue;
      }
    }
    if (typeof aValue === "string" && typeof bValue === "string") {
      if (order === "asc") {
        return aValue.localeCompare(bValue);
      } else {
        return bValue.localeCompare(aValue);
      }
    }
    return 0;
  });

  return sortedArticles;
}
