import { notFound } from "next/navigation";
import { WORKS_LIST_LIMIT } from "@/constants";
import {
  getWorksList,
  getWorksCategoryList,
  getCategoryDetail,
} from "@/lib/api/microcms";
import { Breadcrumbs } from "@/components/ui/BreadCrumb";
import WorksCard from "@/components/ui/Card/WorksCard";
import CardsContainer from "@/components/ui/CardsContainer";
import CategoryFilter from "@/components/ui/CategoryFilter";
import Pagination from "@/components/ui/Pagination";
import WorksListLayout from "@/components/layout/WorksLayout/WorksListLayout";
import styles from "../../page.module.scss";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function WorkListPage({ params }: Props) {
  const {id} = await params;

  const { contents: works, totalCount } = await getWorksList({
    limit: WORKS_LIST_LIMIT,
    filters: `category[equals]${id}`,
  });
  const { contents: categories } = await getWorksCategoryList();

  const category = await getCategoryDetail(id).catch(notFound);

  return (
    <WorksListLayout>
      <Breadcrumbs
        items={[
          { name: "Works", href: "/works" },
          { name: `${category.name}` },
        ]}
      />
      <div className="l-container">
        <div className={`${styles["p-works"]}`}>
          <div className="inner">
            <CategoryFilter
              categories={categories}
              basePath="works"
              currentId={id}
            />
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
                  basePath={`works/category/${id}`}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </WorksListLayout>
  );
}
