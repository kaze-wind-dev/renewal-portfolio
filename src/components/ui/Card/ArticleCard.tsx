import Link from "next/link";
import Image from "next/image";
import { ZennArticle } from "@/types/zenn";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardLikedCount from "./CardLikedCount";
import styles from "./index.module.scss";

type ArticleCardProps = {
  article: ZennArticle;
};

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <article className={`${styles["c-card"]}`}>
      <Link
        href={`https://zenn.dev${article.path}`}
        className={`${styles["c-card__link"]}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <CardHeader title={article.title} emoji={article.emoji}></CardHeader>
        <CardBody>
          <div className={`${styles["c-card__zenn"]}`}>
            <Image
            className={`${styles["c-card__zenn-logo"]}`}
              src="/images/zenn_logo.svg"
              width={172}
              height={37}
              alt="Zennのロゴ"
            />
            <CardLikedCount liked_count={article.liked_count} />
          </div>
        </CardBody>
      </Link>
    </article>
  );
};

export default ArticleCard;
