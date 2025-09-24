"use client";
import Image from "next/image";
import clsx from "clsx";
import { useState, useRef, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import { useInview } from "@/hooks/useInview";
import "@splidejs/react-splide/css";
import styles from "./index.module.scss";

const skillLogos = [
  {
    id: "html",
    src: "/images/html_logo.svg",
    alt: "HTML5",
    width: 75,
    height: 75,
  },
  {
    id: "css",
    src: "/images/css_logo.svg",
    alt: "CSS",
    width: 75,
    height: 75,
  },
  {
    id: "sass",
    src: "/images/sass_logo.svg",
    alt: "SASS",
    width: 100,
    height: 75,
  },
  {
    id: "javascript",
    src: "/images/js_logo.svg",
    alt: "JavaScript",
    width: 75,
    height: 75,
  },
  {
    id: "typescript",
    src: "/images/ts_logo.svg",
    alt: "TypeScript",
    width: 75,
    height: 75,
  },
  {
    id: "next",
    src: "/images/nextjs_logo.svg",
    alt: "Next.js",
    width: 272,
    height: 56,
  },
  {
    id: "react",
    src: "/images/react_logo.svg",
    alt: "react",
    width: 92,
    height: 82,
  },
  {
    id: "php",
    src: "/images/php_logo.svg",
    alt: "PHP",
    width: 106,
    height: 53,
  },
  {
    id: "microcms",
    src: "/images/microcms_logo.svg",
    alt: "microCMS",
    width: 335,
    height: 75,
  },
  {
    id: "vercel",
    src: "/images/vercel_logo.svg",
    alt: "Vercel",
    width: 307,
    height: 61,
  },
  {
    id: "github",
    src: "/images/github_logo.svg",
    alt: "GitHub",
    width: 75,
    height: 74,
  },
];

const TopSkill = () => {
  const ref = useRef<HTMLElement>(null);
  const splideRef = useRef(null);

  const splideOptions = {
    type: "loop",
    focus: "center",
    gap: "1.5rem",
    arrows: false,
    pagination: false,
    autoWidth: true,
    clones: 10,
    cloneStatus: true,
    autoScroll: {
      speed: 0.6,
      autoStart: true,
      pauseOnHover: false,
    },
  };
  const [inview, setInview] = useState(false);

  useInview<HTMLElement>({ ref, setInview, once: false });
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (splideRef.current && (splideRef.current as any).splide) {
      if (inview) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (splideRef.current as any).splide.Components?.AutoScroll.play();
      } else {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (splideRef.current as any).splide.Components?.AutoScroll.pause();
      }
    }
  }, [inview]);

  return (
    <section className={clsx(styles["p-topSkill"], "section")} ref={ref}>

      <SectionTitle
        className={clsx(styles["p-topSkill__title"])}
        heading={<>Skill</>}
        text={<>スキルについて</>}
      />
        <p className={clsx(styles["p-topSkill__text"], "wbr")}>
         HTML・Sass・PHP・自社CMSを使用して<wbr />サイト制作を行っています。
          <br />
          現在の会社へ入社後、3年半で200以上のサイト構築を担当し、<wbr />幅広い業界のWebサイトを手がけてきました。
        </p>
        <p className={clsx(styles["p-topSkill__text"], "wbr")}>
          現在は、React.jsやNext.js、TypeScriptを中心に<wbr />モダンフロント技術を学んでおり、microCMSやVercelを使用した<wbr />フロントエンドの実装を行っています。
        </p>
        <Splide
          options={splideOptions}
          aria-label="実務や学習で使用している言語などの一覧"
          tag="section"
          extensions={{ AutoScroll }}
          className={clsx(styles["p-topSkill__slider"])}
          ref={splideRef}
        >
          {skillLogos.map((logo) => {
            return (
              <SplideSlide
                className={clsx(
                  styles["p-topSkill__slider-slide"], 
                  styles[`p-topSkill__slider-slide--${logo.id}`])}
                key={logo.id}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  loading="lazy"
                />
              </SplideSlide>
            );
          })}
        </Splide>
      <Button
        className={clsx(styles["p-topSkill__button"])}
        href="/about/#skills"
      >
        スキルの詳細を見る
      </Button>
    </section>
  );
};

export default TopSkill;
