export interface ZennUserName {
  username: string;
}

export interface ZennUser {
  id: number;
  username: string;
  name: string;
  avatar_small_url: string;
}

export interface ZennArticle {
  id: number;
  post_type: string;
  title: string;
  slug: string;
  comments_count: number;
  liked_count: number;
  bookmarked_count: number;
  body_letters_count: number;
  article_type: string;
  emoji: string;
  is_suspending_private: boolean;
  published_at: string;
  body_updated_at: string;
  source_repo_updated_at: string | null;
  pinned: boolean;
  path: string;
  principal_type: string;
  user: ZennUser;
  publication: string | null;
}

export interface ZennArticleList {
  articles: ZennArticle[];
  next_page: string | null;
  total_count: string | null;
}

export interface ZennQueries {
  page?: number;
  count?: number;
  order?: string;
  topic?: string;
  article_type?: "tech" | "idea";
}

export type SortKey = keyof ZennArticle;
export type Order = "desc" | "asc";
