import type { ZennQueries } from "@/types/zenn";
function zennAPIClient(username: string) {
  async function get(queries?: ZennQueries | null) {
    try {
      const queryString = queries ? `&${Object.entries(queries).map(([key, value]) => `${key}=${value}`).join("&")}` : "";
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
        throw new Error("接続エラーが発生しました");
      }
      return response.json();
    } catch (error: unknown) {
      if (error) {
        const message =
          error instanceof Error
            ? `APIリクエスト中にエラーが発生しました: ${error.message}`
            : "APIリクエスト中にエラーが発生しました。";
        throw new Error(message);
      }
    }
  }
  return {
    get,
  };
}

export default zennAPIClient;
