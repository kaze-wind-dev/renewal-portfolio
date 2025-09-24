"use client";
import Link from "next/link";
import clsx from "clsx";
import { useRef, useEffect } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import SectionTitle from "@/components/ui/SectionTitle";
import WorksCard from "@/components/ui/Card/WorksCard";
import CustomSplideArrows from "@/components/ui/CustomSprideArrows";
import type { Works } from "@/types/microcms";
import styles from "./index.module.scss";
import "@splidejs/react-splide/css/core";

type Props = {
  works: Works[];
};

const TopWorks = ({ works }: Props) => {
  const splideRef = useRef(null);
  const splideOptions = {
    type: "loop",
    focus: "left",
    gap: "1.875rem",
    arrows: false,
    pagination: false,
    fixedWidth: "360px",
    breakpoints: {
      960: {
        gap: "1.5rem",
        fixedWidth: "360px",
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
    const bar = splide.root.querySelector(".topWorks-progress");
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
    <section className={clsx(styles["p-topWorks"])}>
      <div className={clsx(styles["p-topWorks__inner"])}>
        <SectionTitle
          className={clsx(styles["p-topWorks__title"])}
          heading={<>Works</>}
          text={<>作品紹介</>}
          position="left"
        />

        <Splide
          options={splideOptions}
          aria-label="作品一覧"
          tag="section"
          className={clsx(styles["p-topWorks__slider"])}
          ref={splideRef}
          hasTrack={false}
        >
          <SplideTrack className={clsx(styles["p-topWorks__slider-track"])}>
            {works.map((article) => {
              return (
                <SplideSlide
                  className={clsx(styles["p-topWorks__slider-slide"])}
                  key={article.id}
                >
                  <WorksCard works={article} />
                </SplideSlide>
              );
            })}
          </SplideTrack>
          <div className={clsx(styles["p-topWorks__actions"])}>
            <div className={clsx(styles["p-topWorks__controls"])}>
              <CustomSplideArrows
                splideRef={splideRef}
                className={clsx(styles["p-topWorks__slider-arrows"])}
              />
              <div className={clsx(styles["p-topWorks__progress"])}>
                <div
                  className={clsx(
                    styles["p-topWorks__progress-bar"],
                    "topWorks-progress"
                  )}
                ></div>
              </div>
            </div>
            <Link href="/works" className={styles["p-topWorks__moreLink"]}>
              一覧を見る
              <HiOutlineArrowNarrowRight
                className={clsx(styles["p-topWorks__moreLink-arrow"])}
              />
            </Link>
          </div>
        </Splide>
      </div>
    </section>
  );
};

export default TopWorks;
