"use client";
import Image from "next/image";
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

const TopAbout = ({ showOpening }: Props) => {
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
      return () => {
        /* gsap */
        tl.kill();
      };
    }
  }, [showOpening]);
  return (
    <section className={clsx(styles["p-topAbout"])} ref={triggerRef}>
      <div className={clsx(styles["p-topAbout__inner"], "inner")}>
        <SectionTitle
          className={clsx(styles["p-topAbout__title"])}
          heading={<>私について</>}
          text={<>About me</>}
          position="center"
        />
        <div className={clsx(styles["p-topAbout__text-area"])}>
          <p className={clsx(styles["p-topAbout__text"], "js-fade-up")}>
            東京都内でコーダーとして3年間活動しています。
            <br />
            デザインを忠実に再現することと、アクセシブルなマークアップを心がけて制作に取り組んできました。
          </p>
          <p className={clsx(styles["p-topAbout__text"], "js-fade-up")}>
            フロントエンドエンジニアへの転職を目指しており、より価値のあるWeb開発に挑戦したいと考えています。
          </p>
        </div>
        <Button
          className={clsx(styles["p-topAbout__button"], "js-fade-up")}
          href="/about"
          aria-label=""
        >
          私について詳しく
        </Button>
        <div className={clsx(styles["p-topAbout__image"])}>
          <Image
            src="/images/no_image.jpg"
            width={360}
            height={360}
            alt="アバター画像"
            loading="lazy"
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default TopAbout;
