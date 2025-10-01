import Link from "next/link";
import clsx from "clsx";
import { HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft } from "react-icons/hi";
import styles from "./index.module.scss";

type Props = {
  totalCount: number;
  basePath?: string;
  perpage?: number;
  current?: number;
  display?: number;
};
const Pagination = ({
  totalCount,
  basePath,
  perpage = 10,
  current = 1,
  display = 1,
}: Props) => {
  const totalPages = Math.ceil(totalCount / perpage);
  if (totalPages <= 1) return null;

  const getDisplayPages = () => {
    const maxDisplay = display * 2 + 1;
    if (totalPages <= maxDisplay) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    let start = current - display;
    let end = current + display;

    if (start < 1) {
      start = 1;
      end = Math.min(maxDisplay, totalPages);
    }

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(1, totalPages - maxDisplay + 1);
    }
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };
  const displayPages = getDisplayPages();
  return (
    <nav className={clsx(styles["c-pagination"])} aria-label="ページネーション">
      <ul className={clsx(styles["c-pagination__list"])}>
        {current !== 1 && (
          <li className={clsx(styles["c-pagination__item"])}>
            <Link
              href={`/${basePath}/page/${current - 1}`}
              className={clsx(styles["c-pagination__link"])}
              aria-label="前のページへ"
            >
              <HiOutlineArrowNarrowLeft className={clsx(styles["c-pagination__link-arrow"])} aria-hidden="true"/>
            </Link>
          </li>
        )}
        {displayPages.map((page) => (
          <li key={page} className={clsx(styles["c-pagination__item"])}>
            {current !== page ? (
              <Link
                href={`/${basePath}/page/${page}`}
                className={clsx(styles["c-pagination__link"])}
                aria-label={`${page}ページ目へ`}
              >
                {page}
              </Link>
            ) : (
              <span
                className={clsx(
                  styles["c-pagination__link"],
                  styles["c-pagination__link--current"]
                )}
                aria-label={`${page}ページ目`}
                aria-current="page"
              >
                {page}
              </span>
            )}
          </li>
        ))}
        {current !== totalPages && (
          <li className={clsx(styles["c-pagination__item"])}>
            <Link
              href={`/${basePath}/page/${current + 1}`}
              className={clsx(styles["c-pagination__link"])}
              aria-label="次のページへ"
            >
              <HiOutlineArrowNarrowRight className={clsx(styles["c-pagination__link-arrow"])} aria-hidden="true"/>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
