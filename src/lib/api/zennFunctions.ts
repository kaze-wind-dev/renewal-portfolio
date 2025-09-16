import zennAPIClient from "./zennClient";
import type { ZennQueries } from "@/types/zenn";

if (!process.env.ZENN_USERNAME) {
  throw new Error("usernameが設定されていません");
}

const client = zennAPIClient(process.env.ZENN_USERNAME);

export async function getZennArticles(queries?: ZennQueries | null) {
  return await client.get(queries);
}
