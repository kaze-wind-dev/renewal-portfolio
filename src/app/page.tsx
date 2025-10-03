
import { WORKS_LIST_LIMIT, TOP_ZENN_LIST_LIMIT } from "@/constants";
import { getWorksList } from "@/lib/api/microcms";
import { getZennArticles } from "@/lib/api/zennFunctions";
import TopPageClient from "@/components/TopPageClient";

export default async function Home() {
  const { contents: works } = await getWorksList({
    limit: WORKS_LIST_LIMIT,
  });
  const zennArticlesData = await getZennArticles({
    count: TOP_ZENN_LIST_LIMIT,
    order: "latest",
  });
  return (
    <main>
      <TopPageClient 
      works={works}
      zennArticlesData={zennArticlesData}
      />
    </main>
  );  
}
