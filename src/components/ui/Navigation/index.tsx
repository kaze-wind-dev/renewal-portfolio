"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { isCurrent } from "@/lib/utils/navigation";
import type { NavigationItem } from "@/constants";

type NavigationProps = {
  items: NavigationItem[];
  className: {
    nav?: string;
    list?: string;
    item?: string;
    link?: string;
    linkCurrent?: string;
  };
  ariaLabel?: string;
};

export const Navigation = ({ items, className, ariaLabel }: NavigationProps) => {
  const pathname = usePathname();
  return (
    <nav className={className.nav
    } aria-label={ariaLabel}>
      <ul className={className.list}>
        {items.map((item) => {
          const isCurrentPath = isCurrent(pathname, item.href);
          return (
            <li className={className.item} key={item.href}>
              <Link
                href={item.href}
                className={clsx(
                  className.link,
                  isCurrentPath && className.linkCurrent
                )}
                aria-label={item.label}
                aria-current={isCurrentPath ? "page" : undefined}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

