"use cache";
import Link from "next/link";
import clsx from "clsx";
import { Breadcrumbs } from "@/components/ui/BreadCrumb";
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

export default async function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Site Map" }]} />
      <div className="l-container">
        <div className={clsx(styles["p-sitemap"])}>
          <div className="inner">
            <nav className={clsx(styles["p-sitemap__navigation"])}>
              <ul className={clsx(styles["p-sitemap__list"])}>
                {sitemap.map((page) => {
                  return (
                    <li
                      className={clsx(styles["p-sitemap__item"])}
                      key={page.title}
                    >
                      <Link
                        href={page.url}
                        className={clsx(styles["p-sitemap__link"])}
                      >
                        {page.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
