
import Link from "next/link";
import clsx from "clsx";
import LogoMarkImage from "../LogoImage/LogoMarkImage";
import styles from "./index.module.scss";

type LogoProps = {
  width?: number;
  height?: number;
  link?: boolean;
  className?: string;
};

const Logo = ({
  width = 104,
  height = 104,
  link = false,
  className,
}: LogoProps) => {
  return link ? (
    <Link href="/" className={clsx(styles["c-logo"], className)}>
      <LogoMarkImage width={width} height={height} />
      <span className={styles["c-logo__text"]}>Kaze Portfolio</span>
    </Link>
  ) : (
    <div className={clsx(styles["c-logo"], className)}>
      <LogoMarkImage width={width} height={height} />
      <span className={styles["c-logo__text"]}>Kaze Portfolio</span>
    </div>
  );
};

export default Logo;
