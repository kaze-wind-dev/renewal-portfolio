"use cache";
import { WORKS_LIST_LIMIT } from "@/constants";
import { getWorksList, getWorksCategoryList } from "@/lib/api/microcms";
import { Breadcrumbs } from "@/components/ui/BreadCrumb";
import SectionTitle from "@/components/ui/SectionTitle";
import WorksCard from "@/components/ui/Card/WorksCard";
import CardsContainer from "@/components/ui/CardsContainer";
import CategoryFilter from "@/components/ui/CategoryFilter";
import Pagination from "@/components/ui/Pagination";
import WorksListLayout from "@/components/layout/WorksLayout/WorksListLayout";
import FadeUpClient from "@/components/FadeUpClient";
import styles from "./page.module.scss";

export default async function WorkListPage() {
  const { contents: works, totalCount } = await getWorksList({
    limit: WORKS_LIST_LIMIT,
  });
  const { contents: categories } = await getWorksCategoryList();

  return (
    <WorksListLayout>
      <Breadcrumbs items={[{ name: "Works" }]} />
      <FadeUpClient>
        <div className="l-container fadeup-container">
          <section className={`${styles["p-works"]}`}>
            <div className="inner">
              <SectionTitle
                className="sr-only"
                heading={<>作品一覧</>}
                text={<>Works</>}
                position="left"
              />
              <CategoryFilter categories={categories} basePath="works" />
              {works.length === 0 ? (
                <p className="nopost-message">現在投稿はございません。</p>
              ) : (
                <>
                  <CardsContainer>
                    {works.map((article) => (
                      <WorksCard works={article} key={article.id} />
                    ))}
                  </CardsContainer>
                  <Pagination
                    totalCount={totalCount}
                    perpage={WORKS_LIST_LIMIT}
                    basePath="works"
                  />
                </>
              )}
            </div>
          </section>
        </div>
      </FadeUpClient>
    </WorksListLayout>
  );
}
