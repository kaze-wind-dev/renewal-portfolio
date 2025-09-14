import Link from "next/link";
import clsx from "clsx";
import { FaGithub } from "react-icons/fa";
import { SiZenn } from "react-icons/si";
import { ZENN_LINK, GITHUB_LINK } from "@/constants";
import styles from "./index.module.scss";

const IconList = () => {
  return (
    <nav className={clsx(styles.iconListNav)} aria-label="ソーシャルリンク">
      <ul className={clsx(styles.iconList)}>
        <li className={clsx(styles.iconList__item)}>
          <Link
            className={clsx(styles.iconList__link)}
            href={GITHUB_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className={clsx(styles.iconList__icon)}/>
          </Link>
        </li>
        <li className={clsx(styles.iconList__item)}>
          <Link
            className={clsx(styles.iconList__link)}
            href={ZENN_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Zenn"
          >
            <SiZenn
              className={clsx(styles.iconList__icon)}
              color="#3EA8FF"
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default IconList;
