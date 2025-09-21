import clsx from "clsx";
import { WORKS_LIST_LIMIT, TOP_ZENN_LIST_LIMIT } from "@/constants";
import TopWorks from "@/components/sections/TopWorks";
import TopArticles from "@/components/sections/TopArticles";
import TopSkill from "@/components/sections/TopSkill";
import TopAbout from "@/components/sections/TopAbout";
import TopThanks from "@/components/sections/TopThanks";
import { getWorksList } from "@/lib/api/microcms";
import { getZennArticles } from "@/lib/api/zennFunctions";
import styles from "./page.module.scss";

export default async function Home() {
  const { contents: works } = await getWorksList({
    limit: WORKS_LIST_LIMIT,
  });
  const zennArticlesData = await getZennArticles({
    count: TOP_ZENN_LIST_LIMIT,
    order: "latest",
  });
  return (
    <>
      <section className={clsx(styles["p-topHero"])}>
        <div className={clsx(styles["p-topHero__inner"], "inner")}>
          <p className={clsx(styles["p-topHero__en-text"])}>
            From coder to <br />
            Front-end engineer.
          </p>
          <h1 className={clsx(styles["p-topHero__heading"])}>
            コーダーからフロントエンドエンジニアへ。
            <br />
            3年間の経験を活かし、
            <br />
            次のステージを目指してしています。
          </h1>
          <div
            className={clsx(styles["p-topHero__scroll-guide"])}
            aria-hidden="true"
          >
            <span
              className={clsx(styles["p-topHero__scroll-guide__text"])}
              aria-hidden="true"
            >
              scroll
            </span>
            <div
              className={clsx(styles["p-topHero__scroll-guide__bar"])}
              aria-hidden="true"
            ></div>
          </div>
        </div>
      </section>
      <TopWorks works={works} />
      <TopArticles articles={zennArticlesData.articles} />
      <TopSkill />
      <TopAbout />
      <TopThanks />
    </>
  );
}
