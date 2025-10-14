import type { ZennQueries, ZennArticleList } from "@/types/zenn";
function zennAPIClient(username: string) {
  async function get(queries?: ZennQueries | null) {
    try {
      const queryString = queries
        ? `&${Object.entries(queries)
            .map(([key, value]) => `${key}=${value}`)
            .join("&")}`
        : "";
      const response = await fetch(
        `https://zenn.dev/api/articles?username=${username}${queryString}`,
        {
          next: {
            revalidate: 600,
            tags: ["zenn-articles"],
          },
          cache: "force-cache",
        }
      );
      if (!response.ok) {
        console.error("接続エラーが発生しました:", response.status);
        throw new Error("接続エラーが発生しました");
      }
      return response.json() as unknown | ZennArticleList;
    } catch (error: unknown) {
        const message =
          error instanceof Error
            ? `APIリクエスト中にエラーが発生しました: ${error.message}`
            : "APIリクエスト中にエラーが発生しました。";
        console.error(message);
        throw new Error(message);
    }
  }
  return {
    get,
  };
}

export default zennAPIClient;
