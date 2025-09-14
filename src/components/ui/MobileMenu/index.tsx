"use client";
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";
import IconList from "@/components/ui/IconList";
import styles from "./index.module.scss";

const MobileMenu = () => {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!isOpen);

  return (
    <div className={clsx("l-mobile-menu", styles["c-mobile-menu"])}>
      <button
        onClick={toggleMenu}
        className={clsx(
          styles["c-mobile-menu__toggle"],
          isOpen && styles["c-mobile-menu__toggle--is-open"]
        )}
        aria-label={
          isOpen ? "モバイルメニューを閉じる" : "モバイルメニューを開く"
        }
      >
        <span
          className={clsx(
            styles["c-mobile-menu__toggle-line"],
            styles["c-mobile-menu__toggle-line--top"]
          )}
        ></span>
        <span
          className={clsx(
            styles["c-mobile-menu__toggle-line"],
            styles["c-mobile-menu__toggle-line--middle"]
          )}
        ></span>
        <span
          className={clsx(
            styles["c-mobile-menu__toggle-line"],
            styles["c-mobile-menu__toggle-line--bottom"]
          )}
        ></span>
      </button>
      <div
        onClick={toggleMenu}
        className={clsx(
          styles["c-mobile-menu__overlay"],
          isOpen && styles["c-mobile-menu__overlay--is-open"]
        )}
      ></div>
      <div
        className={clsx(
          styles["c-mobile-menu__panel"],
          isOpen && styles["c-mobile-menu__panel--is-open"]
        )}
      >
        <div className={clsx(styles["c-mobile-menu__inner"])}>
          <div className={styles["c-mobile-menu__content"]}>
            <nav
              className={styles["c-mobile-menu__nav"]}
              aria-label="モバイルメニュー"
            >
              <ul className={styles["c-mobile-menu__nav-list"]}>
                <li className={styles["c-mobile-menu__nav-item"]}>
                  <Link
                    className={styles["c-mobile-menu__nav-link"]}
                    onClick={toggleMenu}
                    href="/"
                  >
                    <span className={styles["c-mobile-menu__nav-text"]}>
                      Top
                    </span>
                  </Link>
                </li>

                <li className={styles["c-mobile-menu__nav-item"]}>
                  <Link
                    className={styles["c-mobile-menu__nav-link"]}
                    onClick={toggleMenu}
                    href="/works"
                  >
                    <span className={styles["c-mobile-menu__nav-text"]}>
                      Works
                    </span>
                  </Link>
                </li>
                <li className={styles["c-mobile-menu__nav-item"]}>
                  <Link
                    className={styles["c-mobile-menu__nav-link"]}
                    onClick={toggleMenu}
                    href="/articles"
                  >
                    <span className={styles["c-mobile-menu__nav-text"]}>
                      Articles
                    </span>
                  </Link>
                </li>
                <li className={styles["c-mobile-menu__nav-item"]}>
                  <Link
                    className={styles["c-mobile-menu__nav-link"]}
                    onClick={toggleMenu}
                    href="/about"
                  >
                    <span className={styles["c-mobile-menu__nav-text"]}>
                      About
                    </span>
                  </Link>
                </li>
                <li className={styles["c-mobile-menu__nav-item"]}>
                  <Link
                    className={styles["c-mobile-menu__nav-link"]}
                    onClick={toggleMenu}
                    href="/contact"
                  >
                    <span className={styles["c-mobile-menu__nav-text"]}>
                      Contact
                    </span>
                  </Link>
                </li>
              </ul>
              <ul className={styles["c-mobile-menu__sub-nav-list"]}>
                <li className={styles["c-mobile-menu__sub-nav-item"]}>
                  <Link
                    className={styles["c-mobile-menu__sub-nav-link"]}
                    onClick={toggleMenu}
                    href="/privacy"
                  >
                    <span className={styles["c-mobile-menu__sub-nav-text"]}>
                      Privacy Policy
                    </span>
                  </Link>
                </li>
                <li className={styles["c-mobile-menu__sub-nav-item"]}>
                  <Link
                    className={styles["c-mobile-menu__sub-nav-link"]}
                    onClick={toggleMenu}
                    href="/site"
                  >
                    <span className={styles["c-mobile-menu__sub-nav-text"]}>
                      Site Map
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
            <div className={styles["c-mobile-menu__icon-list"]}>
              <IconList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
