import zennAPIClient from "./zennClient";
import type { ZennQueries, ZennArticleList } from "@/types/zenn";

if (!process.env.ZENN_USERNAME) {
  throw new Error("usernameが設定されていません");
}

const client = zennAPIClient(process.env.ZENN_USERNAME);

export async function getZennArticles(queries?: ZennQueries | null) {
  try {
    const articleList = await client.get(queries);
    return articleList as ZennArticleList;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Zenn記事の取得に失敗しました:',error.message);
      throw new Error(error.message);
    } else {
      console.error('Zenn記事の取得に失敗しました:',error);
    }
    return {
      articles: [],
      next_page: null,
      total_count: null,
    } as ZennArticleList;
  }
}
