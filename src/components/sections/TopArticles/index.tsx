"use client";
import Link from "next/link";
import clsx from "clsx";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useRef, useEffect } from "react";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import SectionTitle from "@/components/ui/SectionTitle";
import ArticleCard from "@/components/ui/Card/ArticleCard";
import CustomSplideArrows from "@/components/ui/CustomSprideArrows";
import type { ZennArticle } from "@/types/zenn";
import styles from "./index.module.scss";

type Props = {
  articles: ZennArticle[];
};
const TopArticles = ({ articles }: Props) => {
  const splideRef = useRef(null);
  const splideOptions = {
    type: "loop",
    focus: "left",
    gap: "1.875rem",
    arrows: false,
    pagination: false,
    fixedWidth: "300px",
    breakpoints: {
      960: {
        gap: "1.5rem",
        fixedWidth: "280px",
      },
      560: {
        gap: "1.5rem",
        fixedWidth: "64%",
      },
      480: {
        gap: "1.5rem",
        fixedWidth: "70%",
      },
      400: {
        gap: "1.5rem",
        fixedWidth: "80%",
      },
    },
  };
 useEffect(() => {
    if (!splideRef.current) return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const splide = (splideRef.current as any).splide;
    if (!splide) return;
    const bar = splide.root.querySelector(".topArticles-progress");
    const updateProgress = () => {
      const end = splide.Components.Controller.getEnd() + 1;
      const rate = Math.min((splide.index + 1) / end, 1);
      bar.style.width = String(100 * rate) + "%";
    };
    updateProgress();
    splide.on("mounted move", updateProgress);
    return () => {
      splide.off("mounted move", updateProgress);
    };
  }, []);

  return (
    <section className={clsx(styles["p-topArticles"])}>
      <div className={clsx(styles["p-topArticles__inner"])}>
        <SectionTitle
          className={clsx(styles["p-topArticles__title"])}
          heading={<>Articles</>}
          text={<>投稿記事</>}
          position="left"
        />

        <Splide
          options={splideOptions}
          aria-label="Zenn記事の一覧"
          tag="section"
          className={clsx(styles["p-topArticles__slider"])}
          ref={splideRef}
          hasTrack={false}
        >
          <SplideTrack className={clsx(styles["p-topArticles__slider-track"])}>
            {articles.map((article) => {
              return (
                <SplideSlide
                  className={clsx(styles["p-topArticles__slider-slide"])}
                  key={article.id}
                >
                  <ArticleCard article={article} key={article.id} />
                </SplideSlide>
              );
            })}
          </SplideTrack>

           <div className={clsx(styles["p-topArticles__actions"])}>
            <div className={clsx(styles["p-topArticles__controls"])}>
              <CustomSplideArrows
                splideRef={splideRef}
                className={clsx(styles["p-topArticles__slider-arrows"])}
              />
              <div className={clsx(styles["p-topArticles__progress"])}>
                <div
                  className={clsx(
                    styles["p-topArticles__progress-bar"],
                    "topArticles-progress"
                  )}
                ></div>
              </div>
            </div>
            <Link href="/articles" className={styles["p-topArticles__moreLink"]}>
              一覧を見る
              <HiOutlineArrowNarrowRight
                className={clsx(styles["p-topArticles__moreLink-arrow"])}
              />
            </Link>
          </div>
        </Splide>

      </div>
    </section>
  );
};

export default TopArticles;
