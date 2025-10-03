import Link from "next/link";
import clsx from "clsx";
import styles from "./index.module.scss";
import { TiHome } from "react-icons/ti";

interface BreadcrumbsItem {
  href?: string;
  name: string;
}

type BreadcrumbsProps = {
  items: BreadcrumbsItem[];
};

export const Breadcrumbs = ({items}: BreadcrumbsProps) => {
  if (!items || items.length === 0) return null;
  return (
    <nav className={clsx("l-breadcrumb", styles["c-breadcrumb"])} aria-label="パンくずリスト">
      <ul className={clsx(styles["c-breadcrumb__list"])}>
        <li className={clsx(styles["c-breadcrumb__item"])}>
          <Link href="/" className={clsx(styles["c-breadcrumb__link"], styles["c-breadcrumb__link--home"])}>
            <TiHome className={clsx(styles["c-breadcrumb__home-icon"])} aria-hidden="true" />Top
          </Link>
        </li>
        {items.map((item) => {
          return (
            <li className={clsx(styles["c-breadcrumb__item"])} key={item.name}>
              {item.href ? (
                <Link
                  href={item.href}
                  className={clsx(styles["c-breadcrumb__link"])}
                >
                  {item.name}
                </Link>
              ) : (
                <span aria-current="page">{item.name}</span>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
