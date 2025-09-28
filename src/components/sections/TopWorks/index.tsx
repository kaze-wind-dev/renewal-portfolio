"use client";
import Link from "next/link";
import clsx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
  showOpening: boolean;
};

const TopWorks = ({ works, showOpening }: Props) => {
  const splideRef = useRef(null);
  const triggerRef = useRef<HTMLElement>(null);

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
    /* splide*/
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

    /* gsap */
    gsap.registerPlugin(ScrollTrigger);
    const animationTrigger = triggerRef.current;
    if (!animationTrigger) return;
    const sectionTitleHeading = animationTrigger.querySelector(
      ".js-section-title-heading"
    ) as HTMLElement;
    const sectionTitleText = animationTrigger.querySelector(
      ".js-section-title-text > span"
    ) as HTMLElement;
    const fadeUpElements = animationTrigger.querySelectorAll(
      ".js-fade-up"
    ) as NodeListOf<HTMLElement>;
    if (
      !sectionTitleHeading ||
      !sectionTitleText ||
      !animationTrigger ||
      !fadeUpElements
    )
      return;
    if (showOpening) {
      updateProgress();
      splide.on("mounted move", updateProgress);
      gsap.set(sectionTitleHeading, {
        filter: "blur(.5em)",
        opacity: 0,
      });
      gsap.set(sectionTitleText, {
        y: "100%",
        opacity: 0,
      });
      fadeUpElements.forEach((el) => {
        gsap.set(el, {
          y: "20px",
          opacity: 0,
        });
      });
    }
    if (!showOpening) {
      const tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: animationTrigger,
            start: "20% 80%",
            end: "bottom top",
            toggleActions: "play none none none",
          },
        })
        .to(sectionTitleText, {
          y: 0,
          opacity: 1,
          duration: 0.6,
        })
        .to(
          sectionTitleHeading,
          {
            filter: "blur(0px)",
            opacity: 1,
            duration: 0.6,
          },
          "-=0.3"
        )
        .add(() => {
          fadeUpElements.forEach((el, i) => {
            gsap.to(el, {
              y: 0,
              opacity: 1,
              duration: 0.6,
              delay: 0.2 * i,
              ease: "power2.inOut",
            });
          });
        },"-=0.3");
      return () => {
        /* splide*/
        splide.off("mounted move", updateProgress);
        /* gsap */
        tl.kill();
      };
    }
  }, [showOpening]);
  return (
    <section className={clsx(styles["p-topWorks"])} ref={triggerRef}>
      <div className={clsx(styles["p-topWorks__inner"])}>
        <SectionTitle
          className={clsx(styles["p-topWorks__title"])}
          heading={<>作品紹介</>}
          text={<>Works</>}
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
          <SplideTrack
            className={clsx(styles["p-topWorks__slider-track"], "js-fade-up")}
          >
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
          <div className={clsx(styles["p-topWorks__actions"], "js-fade-up")}>
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
              作品一覧を見る
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
