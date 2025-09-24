import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getWorksDetail } from "@/lib/api/microcms";
import { GoLink } from "react-icons/go";
import Button from "@/components/ui/Button";
import Category from "@/components/ui/Category";
import { Breadcrumbs } from "@/components/ui/BreadCrumb";

import styles from "./index.module.scss";

type Props = {
  params: Promise<{
    id: string;
  }>;
  searchParams: Promise<{
    draftKey?: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { id } = await params;
  const data = await getWorksDetail(id).catch(notFound);
  if (!data) {
    notFound();
  }
  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      images: [
        {
          url: data.thumbnail?.url || "ogp.jpg",
          width: data.thumbnail?.width || 1200,
          height: data.thumbnail?.height || 630,
          alt: data.title || "Kaze Portfolio OGP画像",
        },
      ],
    },
  };
}

export default async function WorksDetailPage({ params, searchParams }: Props) {
  const { id } = await params;
  const { draftKey } = await searchParams;
  const data = await getWorksDetail(id, {
    draftKey: draftKey,
  }).catch(notFound);
  return (
    <main>
      <Breadcrumbs
        items={[
          { name: "Works", href: "/works" },
          {
            name: data.category.name,
            href: `/works/category/${data.category.id}`,
          },
          { name: data.title },
        ]}
      />
      <article className={`${styles["p-works-detail"]}`}>
        <div className="inner">
          <div className={styles["p-works-detail__category"]}>
            <Category name={data.category.name} />
          </div>
          <h1 className={styles["p-works-detail__title"]}>{data.title}</h1>
          <p className={styles["p-works-detail__description"]}>
            {data.description}
          </p>
          <div className={`${styles["p-works-detail__container"]}`}>
            <div className={`${styles["p-works-detail__l-content"]}`}>
              <figure className={styles["p-works-detail__thumbnail"]}>
                <Image
                  src={data.thumbnail?.url || `/images/no_image.jpg`}
                  width={data.thumbnail?.width || 640}
                  height={data.thumbnail?.height || 480}
                  alt={data.thumbnail?.alt || `no image`}
                />
              </figure>
              {data.images && (
                <div className={styles["p-works-detail__gallery"]}>
                  {data.images.map((image, index) => (
                    <div
                      key={index}
                      className={styles["p-works-detail__gallery-image"]}
                    >
                      <Image
                        src={image.url}
                        width={image.width}
                        height={image.height}
                        alt={`${data.title} 画像${index + 1}`}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className={`${styles["p-works-detail__r-content"]}`}>
              {data.site_url && (
                <section className={`${styles["p-works-detail__item"]}`}>
                  <h2 className={`${styles["p-works-detail__item-title"]}`}>
                    サイトURL
                  </h2>
                  <Link
                    className={`${styles["p-works-detail__item-link"]}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={data.site_url}
                  >
                    <GoLink
                      className={`${styles["p-works-detail__item-link__icon"]}`}
                    />
                    {data.site_url}
                  </Link>
                </section>
              )}
              {data.github_url && (
                <section className={`${styles["p-works-detail__item"]}`}>
                  <h2 className={`${styles["p-works-detail__item-title"]}`}>
                    GitHub URL
                  </h2>
                  <Link
                    className={`${styles["p-works-detail__item-link"]}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={data.github_url}
                  >
                    <GoLink
                      className={`${styles["p-works-detail__item-link__icon"]}`}
                    />
                    {data.github_url}
                  </Link>
                </section>
              )}
              {data.design_url && (
                <section className={`${styles["p-works-detail__item"]}`}>
                  <h2 className={`${styles["p-works-detail__item-title"]}`}>
                    デザインURL
                  </h2>
                  <Link
                    className={`${styles["p-works-detail__item-link"]}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={data.design_url}
                  >
                    <GoLink
                      className={`${styles["p-works-detail__item-link__icon"]}`}
                    />
                    {data.design_url}
                  </Link>
                </section>
              )}
              {data.period && (
                <section className={`${styles["p-works-detail__item"]}`}>
                  <h2 className={`${styles["p-works-detail__item-title"]}`}>
                    制作期間
                  </h2>
                  <p className={`${styles["p-works-detail__item-text"]}`}>
                    {data.period}
                  </p>
                </section>
              )}
              {data.time_detail && (
                <section className={`${styles["p-works-detail__item"]}`}>
                  <h2 className={`${styles["p-works-detail__item-title"]}`}>
                    制作時間
                  </h2>
                  <p className={`${styles["p-works-detail__item-text"]}`}>
                    {data.time_detail}時間
                  </p>
                </section>
              )}
              {data.background && (
                <section className={`${styles["p-works-detail__item"]}`}>
                  <h2 className={`${styles["p-works-detail__item-title"]}`}>
                    制作背景・課題
                  </h2>
                  <p className={`${styles["p-works-detail__item-text"]}`}>
                    {data.background}
                  </p>
                </section>
              )}
              {data.learned && (
                <section className={`${styles["p-works-detail__item"]}`}>
                  <h2 className={`${styles["p-works-detail__item-title"]}`}>
                    学んだこと・成果
                  </h2>
                  <p className={`${styles["p-works-detail__item-text"]}`}>
                    {data.learned}
                  </p>
                </section>
              )}
              {data.technology_stack && (
                <section className={`${styles["p-works-detail__item"]}`}>
                  <h2 className={`${styles["p-works-detail__item-title"]}`}>
                    技術スタック
                  </h2>
                  <ul className={`${styles["p-works-detail__item-list"]}`}>
                    {data.technology_stack.map((stack) => (
                      <li key={stack}>{stack}</li>
                    ))}
                  </ul>
                </section>
              )}
            </div>
          </div>
          <div className={`${styles["p-works-detail__button"]}`}>
            <Button href="/works" className="mx-center">
              作品一覧に戻る
            </Button>
          </div>
        </div>
      </article>
    </main>
  );
}
