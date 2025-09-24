"use client";

import Link from "next/link";
import { Category } from "@/types/microcms";
import styles from "./index.module.scss";

type CategoryFilterProps = {
  categories: Category[];
  basePath?: string;
  currentId?: string;
};

const CategoryFilter = ({
  categories,
  basePath = "works",
  currentId,
}: CategoryFilterProps) => {
  return (
    <ul className={`${styles["c-categoryFilter"]}`}>
      {currentId ? (
        <li className={`${styles["c-categoryFilter__btn"]}`}>
          <Link
            className={`${styles["c-categoryFilter__link"]}`}
            href={`/${basePath}`}
          >
            すべてのカテゴリー
          </Link>
        </li>
      ) : (
        <li className={`${styles["c-categoryFilter__btn"]}`}>
          <span
            className={`${styles["c-categoryFilter__link"]} ${styles["c-categoryFilter__link--current"]}`}
          >
            すべてのカテゴリー
          </span>
        </li>
      )}
      {categories.map((category) =>
        currentId === category.id ? (
          <li
            key={category.id}
            className={`${styles["c-categoryFilter__btn"]}`}
          >
            <span
              className={`${styles["c-categoryFilter__link"]} ${styles["c-categoryFilter__link--current"]}`}
            >
              {category.name}
            </span>
          </li>
        ) : (
          <li
            key={category.id}
            className={`${styles["c-categoryFilter__btn"]}`}
          >
            <Link
              className={`${styles["c-categoryFilter__link"]}`}
              href={`/${basePath}/category/${category.id}`}
            >
              {category.name}
            </Link>
          </li>
        )
      )}
    </ul>
  );
};

export default CategoryFilter;
