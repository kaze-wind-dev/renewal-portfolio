"use cache";
import Link from "next/link";
import clsx from "clsx";
import { ALL_NAVIGATION_LIST } from "@/constants";
import { Breadcrumbs } from "@/components/ui/BreadCrumb";
import { Navigation } from "@/components/ui/Navigation";
import FadeUpClient from "@/components/FadeUpClient";
import styles from "./page.module.scss";

type SiteMapContent = {
  title: string;
  url: string;
  description: string;
};

type SiteMapContentList = SiteMapContent[];

const sitemap = [
  { title: "Top", url: "/" },
  { title: "Works", url: "/works" },
  { title: "Articles", url: "/articles" },
  { title: "About", url: "/about" },
  { title: "Contact", url: "/contact" },
  { title: "Site Map", url: "/site" },
  { title: "Privacy Policy", url: "/privacy" },
] as SiteMapContentList;

export default async function SiteMapPage() {
  const siteMapNavClassName = {
    nav: styles["p-sitemap__navigation"],
    list: styles["p-sitemap__list"],
    item: styles["p-sitemap__item"],
    link: styles["p-sitemap__link"],
  };
  return (
    <>
      <Breadcrumbs items={[{ name: "Site Map" }]} />
      <FadeUpClient>
        <div className="l-container fadeup-container">
          <div className={clsx(styles["p-sitemap"])}>
            <div className="inner">
              <Navigation
                items={ALL_NAVIGATION_LIST}
                className={siteMapNavClassName}
                ariaLabel="サイトマップナビゲーション"
              />
            </div>
          </div>
        </div>
      </FadeUpClient>
    </>
  );
}
