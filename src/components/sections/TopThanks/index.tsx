"use client";
import { useRef, useEffect } from "react";
import clsx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import styles from "./index.module.scss";

type Props = {
  showOpening: boolean;
};

const TopThanks = ({ showOpening }: Props) => {
  const triggerRef = useRef<HTMLElement>(null);
  useEffect(() => {
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
        }, "-=0.3");
      }
      return () => {
        /* gsap */
        gsap.killTweensOf("*");
      };
  }, [showOpening]);
  return (
    <section className={styles["p-topThanks"]} ref={triggerRef}>
      <div className={`${styles["p-topThanks__inner"]} inner`}>
        <SectionTitle
          className={styles["p-topThanks__title"]}
          heading={<>ご覧いただきありがとうございます</>}
          text={<>Thank you.</>}
        />
        <p className={clsx(styles["p-topThanks__text"], "wbr", "js-fade-up")}>
          ポートフォリオサイトをご覧いただき、
          <wbr />
          ありがとうございます。
        </p>

        <p className={clsx(styles["p-topThanks__text"], "wbr", "js-fade-up")}>
          当サイトはJS実務経験の浅い
          <wbr />
          現役コーダーが作成しております。
        </p>
        <p className={clsx(styles["p-topThanks__text"], "js-fade-up")}>
          お気づきの点や気になる点などございましたら
          <br />
          ぜひお気軽にお問い合わせください。
        </p>
        <Button
          className={`${styles["p-topThanks__button"]} mx-center js-fade-up`}
          href="/contact"
        >
          お問い合わせはこちら
        </Button>
      </div>
    </section>
  );
};

export default TopThanks;
