"use client";
import { useState, useEffect } from "react";
import clsx from "clsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import OpeningAnimation from "@/components/ui/OpeningAnimation";
import TopWorks from "@/components/sections/TopWorks";
import TopArticles from "@/components/sections/TopArticles";
import TopSkill from "@/components/sections/TopSkill";
import TopAbout from "@/components/sections/TopAbout";
import TopThanks from "@/components/sections/TopThanks";
import styles from "./index.module.scss";
import type { Works } from "@/types/microcms";
import type { ZennArticleList } from "@/types/zenn";

type Props = {
  works: Works[];
  zennArticlesData: ZennArticleList;
};

const TopPageClient = ({ works, zennArticlesData }: Props) => {
  const [showOpening, setShowOpening] = useState<boolean>(true);
  useEffect(() => {
    const hasViewed = sessionStorage.getItem("hasViewed");
    if (hasViewed) {
      setShowOpening(false);
    } else {
      sessionStorage.setItem("hasViewed", "true");
    }
    gsap.registerPlugin(ScrollTrigger);
    const header = document.querySelector(".js-header-inner") as HTMLElement;
    const mobileMenuToggle = document.querySelector(
      ".js-mobile-menu-toggle"
    ) as HTMLElement;
    const appearTexts = document.querySelectorAll(
      ".js-hero-appear-text > span"
    ) as NodeListOf<HTMLSpanElement>;
    const fadeText = document.querySelector(
      ".js-hero-fade-text"
    ) as HTMLElement;
    const scrollBar = document.querySelector(".js-scroll-bar") as HTMLElement;
    if (!header || !mobileMenuToggle || !fadeText || !scrollBar) return;
    if (showOpening) {
      gsap.set(header, {
        opacity: 0,
        y: -20,
      });
      gsap.set(mobileMenuToggle, {
        opacity: 0,
        y: -12,
      });
      appearTexts.forEach((el) => {
        gsap.set(el, {
          y: "100%",
        });
      });
      gsap.set(fadeText, {
        filter: "blur(.25em)",
        opacity: 0,
      });
    }
    if (!showOpening) {
      const tl = gsap
        .timeline()
        .to(header, {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.inOut",
        })
        .to(
          mobileMenuToggle,
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power2.inOut",
          },
          "-=1.2"
        )
        .add(() => {
          appearTexts.forEach((el) => {
            gsap.to(el, {
              y: 0,
              ease: "power2.inOut",
              duration: 1.2,
              delay: 0,
            });
          });
        }, "-=0.8")
        .to(
          fadeText,
          {
            filter: "blur(0px)",
            duration: 1.2,
            ease: "power2.inOut",
            opacity: 1.2,
          },
          "-=.4"
        );
      return () => {
        tl.kill();
      };
    }
    ScrollTrigger.create({
      trigger: scrollBar,
      start: "top bottom",
      toggleClass: {
        targets: scrollBar,
        className: styles["p-topHero__scroll-guide__bar--is-start"],
      },
    });
  }, [showOpening]);

  return (
    <>
      {showOpening && (
        <OpeningAnimation onComplete={() => setShowOpening(false)} />
      )}
      <section className={clsx(styles["p-topHero"], "top-hero")}>
        <div className={clsx(styles["p-topHero__inner"], "inner")}>
          <p className={clsx(styles["p-topHero__en-text"])} aria-hidden="true">
            <span className="js-hero-appear-text">
              <span>From coder to</span>
            </span>
            <br />
            <span className="js-hero-appear-text">
              <span>Front-end</span>
            </span>{" "}
            <span className="js-hero-appear-text">
              <span>engineer.</span>
            </span>
          </p>
          <h1
            className={clsx(styles["p-topHero__heading"], "js-hero-fade-text")}
          >
            コーダーからフロントエンドエンジニアへ。
            <br />
            3年間の経験を活かし、
            <br />
            次のステージを目指しています。
          </h1>
          <div
            className={clsx(styles["p-topHero__scroll-guide"])}
            aria-hidden="true"
          >
            <span className={clsx(styles["p-topHero__scroll-guide__text"])}>
              scroll
            </span>
            <div
              className={clsx(
                styles["p-topHero__scroll-guide__bar"],
                "js-scroll-bar"
              )}
            ></div>
          </div>
        </div>
      </section>
      <TopWorks works={works} showOpening={showOpening} />
      <TopArticles
        articles={zennArticlesData.articles}
        showOpening={showOpening}
      />
      <TopSkill showOpening={showOpening} />
      <TopAbout showOpening={showOpening} />
      <TopThanks showOpening={showOpening} />
    </>
  );
};

export default TopPageClient;
