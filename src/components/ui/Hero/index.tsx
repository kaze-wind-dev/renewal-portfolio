"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import clsx from "clsx";
import styles from "./index.module.scss";

export interface HeroProps {
  subTitle: string;
  heading: string;
  pageDescription?: React.ReactNode;
  className?: string;
}

const Hero = ({ heading, subTitle, pageDescription, className }: HeroProps) => {
  useEffect(() => {
    const appearText = document.querySelector(
      ".js-hero-appear-text > span"
    ) as HTMLSpanElement;
    const fadeText = document.querySelector(
      ".js-hero-fade-text"
    ) as HTMLElement;
    if (!appearText || !fadeText) return;
    gsap.set(appearText, {
      y: "100%",
    });
    gsap.set(fadeText, {
      filter: "blur(.5em)",
      opacity: 0,
    });
    const tl = gsap
      .timeline()
      .to(appearText, {
        y: 0,
        ease: "power2.inOut",
        duration: .6,
      
      })
      .to(
        fadeText,
        {
          filter: "blur(0px)",
          duration: .6,
          ease: "power2.inOut",
          opacity: 1,
        },
        "-=.6"
      );
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      className={clsx(styles["l-hero"], styles["c-hero"], className || "")}
    >
      <div className={clsx(styles["c-hero__inner"], "inner")}>
        <hgroup className={clsx(styles["c-hero__title"])}>
          <h1
            className={clsx(styles["c-hero__heading"], "js-hero-fade-text")}
          >
            {subTitle}
          </h1>
          <p
            className={clsx(styles["c-hero__sub-title"], "js-hero-appear-text")}
            aria-hidden="true"
          >
            <span>{heading}</span>
          </p>
        </hgroup>
        {pageDescription && (
          <p
            className={clsx(
              styles["c-hero__description"],
              "js-hero-fadeup-text"
            )}
          >
            <span>{pageDescription}</span>
          </p>
        )}
      </div>
    </section>
  );
};

export default Hero;
