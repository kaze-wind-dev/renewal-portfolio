import clsx from "clsx";
import { Breadcrumbs } from "@/components/ui/BreadCrumb";
import ArticlesClient from "@/components/ArticlesClient";
import SectionTitle from "@/components/ui/SectionTitle";
import { getZennArticles } from "@/lib/api/zennFunctions";
import FadeUpClient from "@/components/FadeUpClient";
import styles from "./page.module.scss";
import { ZennArticle } from "@/types/zenn";

type Props = {
  searchParams: Promise<{
    sort?: string;
    order?: string;
    searchQuery?: string;
  }>;
};

export default async function ArticlesListPage({ searchParams }: Props) {
  const fetchData = await getZennArticles();
  const { sort, order, searchQuery } = await searchParams;
  const qSortKey = (sort as keyof ZennArticle) || "published_at";
  const qOrder = (order as "asc" | "desc") || "desc";
  const qSearchQuery = (searchQuery as string) || "";
  return (
    <>
      <Breadcrumbs items={[{ name: "Articles" }]} />
      <FadeUpClient>
        <div className="l-container fadeup-container">
          <section className={clsx(styles["p-articles"])}>
            <div className="inner">
              <SectionTitle
                className="sr-only"
                heading={<>Zenn Articles</>}
                text={<>Zenn投稿記事一覧</>}
                position="left"
              />
              <ArticlesClient
                initialArticles={fetchData.articles}
                initialSortKey={qSortKey}
                initialOrder={qOrder}
                initialSearchQuery={qSearchQuery}
              />
            </div>
          </section>
        </div>
      </FadeUpClient>
    </>
  );
}
