"use client";
import Image from "next/image";
import clsx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState, useRef, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import { useInview } from "@/hooks/useInview";
import "@splidejs/react-splide/css";
import styles from "./index.module.scss";

type Props = {
  showOpening: boolean;
};

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

const TopSkill = ({ showOpening }: Props) => {
  const triggerRef = useRef<HTMLElement>(null);
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
  useInview<HTMLElement>({ ref: triggerRef, setInview, once: false });

  useEffect(() => {
    /* splide*/
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
        });
      return () => {
        /* gsap */
        tl.kill();
      };
    }
  }, [inview, showOpening]);

  return (
    <section className={clsx(styles["p-topSkill"])} ref={triggerRef}>
      <SectionTitle
        className={clsx(styles["p-topSkill__title"])}
        heading={<>スキルについて</>}
        text={<>Skill</>}
      />
      <p className={clsx(styles["p-topSkill__text"], "wbr", "js-fade-up")}>
        HTML・Sass・PHP・自社CMSを使用して
        <wbr />
        サイト制作を行っています。
        <br />
        現在の会社へ入社後、3年半で200以上のサイト構築を担当し、
        <wbr />
        幅広い業界のWebサイトを手がけてきました。
      </p>
      <p className={clsx(styles["p-topSkill__text"], "wbr", "js-fade-up")}>
        現在は、React.jsやNext.js、TypeScriptを中心に
        <wbr />
        モダンフロント技術を学んでおり、microCMSやVercelを使用した
        <wbr />
        フロントエンドの実装を行っています。
      </p>
      <Splide
        options={splideOptions}
        aria-label="実務や学習で使用している言語などの一覧"
        tag="section"
        extensions={{ AutoScroll }}
        className={clsx(styles["p-topSkill__slider"], "js-fade-up")}
        ref={splideRef}
      >
        {skillLogos.map((logo) => {
          return (
            <SplideSlide
              className={clsx(
                styles["p-topSkill__slider-slide"],
                styles[`p-topSkill__slider-slide--${logo.id}`]
              )}
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
        className={clsx(styles["p-topSkill__button"], "js-fade-up")}
        href="/about/#skills"
      >
        スキルの詳細を見る
      </Button>
    </section>
  );
};

export default TopSkill;
