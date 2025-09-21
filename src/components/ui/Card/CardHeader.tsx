import Image from "next/image";
import type { MicroCMSImage } from "microcms-js-sdk";
import clsx from "clsx";
import styles from "./index.module.scss";

type CardHeaderProps = {
  title: string;
  lineClamp?: number;
  thumbnail?: MicroCMSImage;
  emoji?: string;
  children?: React.ReactNode;
};

const CardHeader = ({
  title,
  thumbnail,
  emoji,
  children,
  lineClamp = 1,
}: CardHeaderProps) => {
  return (
    <header className={clsx(styles["c-card__header"])}>
      {thumbnail ? (
        <figure className={clsx(styles["c-card__thumbnail"])}>
          <Image
            src={thumbnail?.url || `/images/no_image.jpg`}
            width={thumbnail?.height || 640}
            height={thumbnail?.width || 480}
            alt={thumbnail.url ? title : `no image`}
            loading="lazy"
          />
        </figure>
      ) : emoji ? (
        <div className={clsx(styles["c-card__emoji"])}>{emoji}</div>
      ) : (
        <figure className={clsx(styles["c-card__thumbnail"])}>
          <Image
            src={`/images/no_image.jpg`}
            width={640}
            height={480}
            alt={`no image`}
            loading="lazy"
          />
        </figure>
      )}
      <h3
        className={clsx(
          styles["c-card__title"],
          styles[`line-clamp-${lineClamp}`]
        )}
      >
        {title}
      </h3>
      {children}
    </header>
  );
};

export default CardHeader;
