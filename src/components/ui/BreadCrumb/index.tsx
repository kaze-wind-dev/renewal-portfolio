import Link from "next/link";
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
    <nav className={`l-breadcrumb ${styles["c-breadcrumb"]}`} aria-label="パンくずリスト">
      <ul className={`${styles["c-breadcrumb__list"]}`}>
        <li className={`${styles["c-breadcrumb__item"]}`}>
          <Link href="/" className={`${styles["c-breadcrumb__link"]} ${styles["c-breadcrumb__link--home"]}`}>
            <TiHome className={`${styles["c-breadcrumb__home-icon"]}`}/>Top
          </Link>
        </li>
        {items.map((item) => {
          return (
            <li className={`${styles["c-breadcrumb__item"]}`} key={item.name}>
              {item.href ? (
                <Link
                  href={item.href}
                  className={`${styles["c-breadcrumb__link"]}`}
                >
                  {item.name}
                </Link>
              ) : (
                item.name
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
