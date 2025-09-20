"use client";
import Image from "next/image";
import clsx from "clsx";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import styles from "./index.module.scss";

const TopAbout = () => {

  return (
    <section className={clsx(styles["p-topAbout"])}>
      <div className={clsx(styles["p-topAbout__inner"], "inner")}>
           <SectionTitle
        className={clsx(styles["p-topAbout__title"])}
        heading={<>About me</>}
        text={<>私について</>}
        position="center"
      />
        <div
          className={clsx(styles["p-topAbout__text-area"])}
        >
          <p className={clsx(styles["p-topAbout__text"])}>
            東京都内でコーダーとして3年間従事。
            <br />
            200件以上のWebサイト構築実績があります。
            <br />
            現在はReact/Next.jsを学習し、フロントエンドエンジニアへの転職を目指しており、より価値のあるWeb開発に挑戦したいと考えています。
          </p>
        </div>
        <Button
          className={clsx(styles["p-topAbout__button"])}
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
