import Link from "next/link";
import { TiHome } from "react-icons/ti";
import { Metadata } from "next";
import Button from "@/components/ui/Button";
import PageLayout from "@/components/layout/PageLayout";
import styles from "./notfound.module.scss";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "404 Not Found",
  description: "お探しのページは見つかりません",
};

export default function Home() {
  return (
    <PageLayout
      hero={{
        heading: "Not Found",
        subTitle: "お探しのページは見つかりません",
        pageDescription: (
          <>
            アクセスいただいたページは存在しないか、移動または削除された可能性があります。
            <br />
            お手数ですが、再度お試しいただくか、メニューから目的のページをご確認ください。
          </>
        ),
      }}
    >
      <nav
        className={`l-breadcrumb ${styles["c-breadcrumb"]}`}
        aria-label="パンくずリスト"
      >
        <ul className={`${styles["c-breadcrumb__list"]}`}>
          <li className={`${styles["c-breadcrumb__item"]}`}>
            <Link
              href="/"
              className={`${styles["c-breadcrumb__link"]} ${styles["c-breadcrumb__link--home"]}`}
            >
              <TiHome className={`${styles["c-breadcrumb__home-icon"]}`} />
              Top
            </Link>
          </li>
          <li className={`${styles["c-breadcrumb__item"]}`}>Not Found</li>
        </ul>
      </nav>
      <div className="l-container">
        <div className={`${styles["p-notfound"]}`}>
          <div className="inner">
            <div className={`${styles["p-notfound__links"]}`}>
              <Button className={`${styles["p-notfound__button"]}`} href="/">
                トップページに戻る
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
