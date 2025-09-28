"use cache";
import Link from "next/link";
import clsx from "clsx";
import { Breadcrumbs } from "@/components/ui/BreadCrumb";
import FadeUpClient from "@/components/FadeUpClient";
import styles from "./page.module.scss";

export default async function PrivacyPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Privacy Policy" }]} />
      <FadeUpClient>
        <div className="l-container fadeup-container">
          <section className={clsx(styles["p-privacy"])}>
            <div className="inner">
              <section className={clsx(styles["p-privacy__section"])}>
                <h3 className={clsx(styles["p-privacy__section-title"])}>
                  1. 個人情報の取得について
                </h3>
                <p className={clsx(styles["p-privacy__text"])}>
                  当サイトでは、お問い合わせフォームを通じて以下の情報を取得することがあります：
                </p>
                <ul className={clsx(styles["p-privacy__list"])}>
                  <li className={clsx(styles["p-privacy__list-item"])}>
                    お名前
                  </li>
                  <li className={clsx(styles["p-privacy__list-item"])}>
                    メールアドレス
                  </li>
                  <li className={clsx(styles["p-privacy__list-item"])}>
                    お問い合わせ内容
                  </li>
                </ul>
                <p className={clsx(styles["p-privacy__text"])}>
                  これらの情報は、お客様が任意で入力された場合のみ取得します。
                </p>
              </section>

              <section className={clsx(styles["p-privacy__section"])}>
                <h3 className={clsx(styles["p-privacy__section-title"])}>
                  2. 個人情報の利用目的
                </h3>
                <p className={clsx(styles["p-privacy__text"])}>
                  取得した個人情報は、以下の目的でのみ使用します：
                </p>
                <ul className={clsx(styles["p-privacy__list"])}>
                  <li className={clsx(styles["p-privacy__list-item"])}>
                    お問い合わせへの回答
                  </li>
                  <li className={clsx(styles["p-privacy__list-item"])}>
                    必要に応じたご連絡
                  </li>
                </ul>
              </section>

              <section className={clsx(styles["p-privacy__section"])}>
                <h3 className={clsx(styles["p-privacy__section-title"])}>
                  3. 個人情報の第三者提供
                </h3>
                <p className={clsx(styles["p-privacy__text"])}>
                  お客様の個人情報を第三者に提供することはありません。ただし、法令に基づき開示が求められる場合は除きます。
                </p>
              </section>

              <section className={clsx(styles["p-privacy__section"])}>
                <h3 className={clsx(styles["p-privacy__section-title"])}>
                  4. Cookieについて
                </h3>
                <p className={clsx(styles["p-privacy__text"])}>
                  当サイトでは、サイトの利用状況を把握し、サービス向上のためにCookieを使用しています。Cookieはお客様のブラウザ設定により無効にすることができます。
                </p>
              </section>

              <section className={clsx(styles["p-privacy__section"])}>
                <h3 className={clsx(styles["p-privacy__section-title"])}>
                  5. アクセス解析ツールについて
                </h3>
                <p className={clsx(styles["p-privacy__text"])}>
                  当サイトでは、Google
                  Analyticsを使用してアクセス状況を分析しています。Google
                  Analyticsでは、Cookieを使用してお客様の行動に関する情報を収集していますが、個人を特定する情報は含まれません。
                </p>
                <p className={clsx(styles["p-privacy__text"])}>
                  Google Analyticsの詳細については、以下をご確認ください：
                </p>
                <ul className={clsx(styles["p-privacy__list"])}>
                  <li className={clsx(styles["p-privacy__list-item"])}>
                    <Link
                      href="https://marketingplatform.google.com/about/analytics/terms/jp/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={clsx(styles["p-privacy__link"])}
                    >
                      Google Analytics利用規約
                    </Link>
                  </li>
                  <li className={clsx(styles["p-privacy__list-item"])}>
                    <Link
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={clsx(styles["p-privacy__link"])}
                    >
                      Googleプライバシーポリシー
                    </Link>
                  </li>
                </ul>
                <p className={clsx(styles["p-privacy__text"])}>
                  データの収集を無効にしたい場合は、
                  <Link
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={clsx(styles["p-privacy__link"])}
                  >
                    Google Analyticsオプトアウト アドオン
                  </Link>
                  をご利用ください。
                </p>
              </section>

              <section className={clsx(styles["p-privacy__section"])}>
                <h3 className={clsx(styles["p-privacy__section-title"])}>
                  6. 個人情報の管理
                </h3>
                <p className={clsx(styles["p-privacy__text"])}>
                  お客様の個人情報は適切に管理し、利用目的達成後または削除のご要望をいただいた場合は、速やかに削除いたします。
                </p>
              </section>

              <section className={clsx(styles["p-privacy__section"])}>
                <h3 className={clsx(styles["p-privacy__section-title"])}>
                  7. お問い合わせ先
                </h3>
                <p className={clsx(styles["p-privacy__text"])}>
                  本プライバシーポリシーに関するお問い合わせは、サイト内のお問い合わせフォームよりご連絡ください。
                </p>
              </section>

              <section className={clsx(styles["p-privacy__section"])}>
                <h3 className={clsx(styles["p-privacy__section-title"])}>
                  8. プライバシーポリシーの変更
                </h3>
                <p className={clsx(styles["p-privacy__text"])}>
                  本ポリシーは、必要に応じて変更することがあります。変更後の内容は、当サイトに掲載した時点から効力を生じるものとします。
                </p>
              </section>

              <div className={clsx(styles["p-privacy__section"])}>
                <p className={clsx(styles["p-privacy__text"])}>
                  制定日：2025年8月8日
                  <br />
                  最終更新日：2025年8月8日
                </p>
              </div>
            </div>
          </section>
        </div>
      </FadeUpClient>
    </>
  );
}
