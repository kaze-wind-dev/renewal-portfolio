"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { MAIN_NAVIGATION_LIST, SUB_NAVIGATION_LIST } from "@/constants";
import { isCurrent } from "@/lib/utils/navigation";
import IconList from "@/components/ui/IconList";
import styles from "./index.module.scss";

const MobileMenu = () => {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!isOpen);
  const pathname = usePathname();

  return (
    <div className={clsx("l-mobile-menu", styles["c-mobile-menu"])}>
      <button
        onClick={toggleMenu}
        className={clsx(
          styles["c-mobile-menu__toggle"],
          isOpen && styles["c-mobile-menu__toggle--is-open"],
          "js-mobile-menu-toggle"
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
                {MAIN_NAVIGATION_LIST.map((item) => {
                  const isCurrentPath = isCurrent(pathname, item.href);
                  return (
                    <li
                      className={styles["c-mobile-menu__nav-item"]}
                      key={item.href}
                    >
                      <Link
                        className={clsx(
                          styles["c-mobile-menu__nav-link"],
                          isCurrentPath &&
                            styles["c-mobile-menu__nav-link--current"]
                        )}
                        onClick={toggleMenu}
                        href={item.href}
                        aria-label={item.label}
                        aria-current={isCurrentPath ? "page" : undefined}
                      >
                        <span className={styles["c-mobile-menu__nav-text"]}>
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <ul className={styles["c-mobile-menu__sub-nav-list"]}>
                {SUB_NAVIGATION_LIST.map((item) => {
                  const isCurrentPath = isCurrent(pathname, item.href);
                  return (
                    <li
                      className={styles["c-mobile-menu__sub-nav-item"]}
                      key={item.href}
                    >
                      <Link
                        className={clsx(
                          styles["c-mobile-menu__sub-nav-link"],
                          isCurrentPath &&
                            styles["c-mobile-menu__sub-nav-link--current"]
                        )}
                        onClick={toggleMenu}
                        href={item.href}
                        aria-label={item.label}
                        aria-current={isCurrentPath ? "page" : undefined}
                      >
                        <span className={styles["c-mobile-menu__sub-nav-text"]}>
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  );
                })}
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
