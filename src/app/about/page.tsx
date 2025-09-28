"use cache";
import Image from "next/image";
import clsx from "clsx";
import { Breadcrumbs } from "@/components/ui/BreadCrumb";
import IconList from "@/components/ui/IconList";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeUpClient from "@/components/FadeUpClient";
import styles from "./page.module.scss";

type skillContent = {
  title: string;
  technologies: string[];
  text?: string;
};

type skillContentList = skillContent[];
const skillsSectionItems: skillContentList = [
  {
    title: "実務経験（4年）",
    technologies: ["HTML", "CSS", "Sass", "PHP", "jQuery", "EC-CUBE"],
    text: "HTML/CSS(SCSS)/PHP/自社CMSを使用したコーディング業務で200件以上のサイト構築しました。\n入社2年目からは、slugやページ名のミスが多かったことをきっかけに、これらを一元管理できないかと考え、Pagemanager（ページ情報管理ツール）というツールを独自に設計・開発しました。配列を使用した情報管理と関数とクラス構文を活用した実装を行い、ナビゲーションの作成機能を持たせました。今年の7月に社内にリリースを行い、現在は運用中です。\n加えて、簡単なマネジメント業務の担当を経験しており、支店内のコーダーの構築能力や案件の納期を踏まえて案件の割り振りを行なっておりました。\n最近では業務で対応可能な範囲でサイトの表示改善を行っており、直近の未公開のサイトでは一部のページでPageSpeedInsightsのスコア90以上（PC）を達成しました。",
  },
  {
    title: "個人学習",
    technologies: ["React", "Next.js", "TypeScript", "JavaScript", "GitHub"],
    text: "ポートフォリオの掲載の有無を合わせて、過去に6プロジェクトを作成しました。\nそのうちポートフォリオ掲載は3作品を掲載しています。\nフロントエンドエンジニアへの転職を目指して、今年の4月よりReact/Next.jsの学習と作品制作を開始しました。\n過去にもVanillaJSやReactを断続的に学習していましたが、現在は継続的に取り組んでいます。\nNext.js + microCMSでのJamstack構成での開発が可能なレベルまで到達しており、掲載している3作品はそれぞれJamstack構成で開発しています。\n「世界一流のエンジニアの思考法」という本を読んでからは特に基本に忠実になろうと意識して学習に取り組んでいます。\n今後は簡易的なCMSやログイン機能付のTODOアプリを作成してみたいと考えております。",
  },
];

export default async function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "About" }]} />
      <FadeUpClient>
        <div className="l-container fadeup-container">
          <section className={clsx(styles["p-profile"])}>
            <div className="inner">
              <div className={clsx(styles["p-profile__container"])}>
                <div className={clsx(styles["p-profile__left"])}>
                  <div className={clsx(styles["p-profile__name"])}>
                    <h2 className={clsx(styles["p-profile__name-ja"])}>
                      岩本 颯
                    </h2>
                    <p
                      className={clsx(styles["p-profile__name-en"])}
                      aria-hidden="true"
                    >
                      Iwamoto Hayate
                    </p>
                    <p className={clsx(styles["p-profile__role"])}>コーダー</p>
                  </div>
                  <p className={clsx(styles["p-profile__text"])}>
                    はじめまして。
                    <br />
                    東京都内でコーダーとして勤務している、
                    <ruby>
                      岩本 颯<rp>(</rp>
                      <rt>いわもとはやて</rt>
                      <rp>)</rp>
                    </ruby>
                    といいます。
                    <br />
                    『限られた期間のなかでいかに早く、綺麗に構築をするか』を常に考えてコーディングを行い、継続的に構築方法をアップデートするようしてきました。
                    <br />
                    自社ヘッドレスCMSを使用した経験から、ヘッドレスCMSのUIの自由度の高さに魅力を感じています。
                    特にJamstack構成のサイト制作に興味を持っており、現在はフロントエンドエンジニアを目指して、学習と転職活動を行なっています。
                    <br />
                    将来的にはバックエンドへ分野を広げ、フロントを主戦場としたフルスタックエンジニアになることが目標です。
                  </p>
                </div>
                <div className={clsx(styles["p-profile__right"])}>
                  <div className={clsx(styles["p-profile__image"])}>
                    <Image
                      src="/images/profile_image.jpg"
                      width={600}
                      height={401}
                      alt="プロフィール画像"
                      loading="lazy"
                    />
                  </div>
                  <IconList />
                </div>
              </div>
            </div>
          </section>
          <section className={clsx(styles["p-achievement"])}>
            <div className="inner">
              <SectionTitle heading="実績" text="Achievement" position="left" />
              <ul className={clsx(styles["p-achievement__list"])}>
                <li className={clsx(styles["p-achievement__list-item"])}>
                  <h3
                    className={clsx(styles["p-achievement__list-item__title"])}
                  >
                    構築件数
                  </h3>
                  <p
                    className={clsx(
                      styles["p-achievement__list-item__content"]
                    )}
                  >
                    <span className={clsx(styles["achievement-number"])}>
                      238
                    </span>
                    件
                  </p>
                  <small
                    className={clsx(styles["p-achievement__list-item__note"])}
                  >
                    2025年8月末時点
                  </small>
                </li>
                <li className={clsx(styles["p-achievement__list-item"])}>
                  <h3
                    className={clsx(styles["p-achievement__list-item__title"])}
                  >
                    サイト表示改善
                  </h3>
                  <p
                    className={clsx(
                      styles["p-achievement__list-item__content"]
                    )}
                  >
                    PC
                    <span className={clsx(styles["achievement-number"])}>
                      90
                    </span>
                    以上・SP
                    <span className={clsx(styles["achievement-number"])}>
                      70
                    </span>
                    以上
                  </p>
                  <small
                    className={clsx(styles["p-achievement__list-item__note"])}
                  >
                    PageSpeedInsightsスコア
                  </small>
                </li>
                <li className={clsx(styles["p-achievement__list-item"])}>
                  <h3
                    className={clsx(styles["p-achievement__list-item__title"])}
                  >
                    社内ツール開発
                  </h3>
                  <p
                    className={clsx(
                      styles["p-achievement__list-item__content"]
                    )}
                  >
                    開発期間
                    <span className={clsx(styles["achievement-number"])}>
                      2
                    </span>
                    年
                  </p>
                  <small
                    className={clsx(styles["p-achievement__list-item__note"])}
                  >
                    コーダー用のツール
                  </small>
                </li>
                <li className={clsx(styles["p-achievement__list-item"])}>
                  <h3
                    className={clsx(styles["p-achievement__list-item__title"])}
                  >
                    経験年数
                  </h3>
                  <p
                    className={clsx(
                      styles["p-achievement__list-item__content"]
                    )}
                  >
                    <span className={clsx(styles["achievement-number"])}>
                      3
                    </span>
                    年
                    <span className={clsx(styles["achievement-number"])}>
                      6
                    </span>
                    か月
                  </p>
                </li>
                <li className={clsx(styles["p-achievement__list-item"])}>
                  <h3
                    className={clsx(styles["p-achievement__list-item__title"])}
                  >
                    マネジメント
                  </h3>
                  <p
                    className={clsx(
                      styles["p-achievement__list-item__content"]
                    )}
                  >
                    約
                    <span className={clsx(styles["achievement-number"])}>
                      6
                    </span>
                    か月間
                  </p>
                </li>
                <li className={clsx(styles["p-achievement__list-item"])}>
                  <h3
                    className={clsx(styles["p-achievement__list-item__title"])}
                  >
                    採用・教育
                  </h3>
                  <p
                    className={clsx(
                      styles["p-achievement__list-item__content"]
                    )}
                  >
                    <span className={clsx(styles["achievement-number"])}>
                      2
                    </span>
                    回経験
                  </p>
                </li>
              </ul>
            </div>
          </section>

          <section className={clsx(styles["p-skills"])} id="skills">
            <div className="inner">
              <SectionTitle
                heading="技術・スキル"
                text="Skills"
                position="right"
              />
              <div className={clsx(styles["p-skills__items"])}>
                {skillsSectionItems.map((item) => {
                  return (
                    <section
                      className={clsx(styles["p-skills__item"])}
                      key={item.title}
                    >
                      <h3 className={clsx(styles["p-skills__item-title"])}>
                        {item.title}
                      </h3>
                      <ul
                        className={clsx(styles["p-skills__item-technologies"])}
                      >
                        {item.technologies.map((technology) => {
                          return (
                            <li
                              className={clsx(
                                styles["p-skills__item-technology"]
                              )}
                              key={technology}
                            >
                              {technology}
                            </li>
                          );
                        })}
                      </ul>
                      <div className={clsx(styles["p-skills__item-text"])}>
                        <p>{item.text}</p>
                      </div>
                    </section>
                  );
                })}
              </div>
            </div>
          </section>

          <section className={clsx(styles["p-experience"])}>
            <div className="inner">
              <SectionTitle
                heading="経歴・経験"
                text="Experience"
                position="left"
              />
              <dl className={clsx(styles["p-experience__list"])}>
                <div className={clsx(styles["p-experience__list-item"])}>
                  <dt className={clsx(styles["p-experience__list-item__year"])}>
                    2018年4月
                  </dt>
                  <dd
                    className={clsx(styles["p-experience__list-item__content"])}
                  >
                    高校卒業後、市役所で公務員（土木系技術職）として2年間従事。
                    <br />
                    下水道工事の工事発注や現場管理、窓口対応などを担当する。
                    <br />
                    上司だった方から効率化や仕事に対する姿勢を学ぶが、仕事が合わずに悩み、自分なりに様々な業界を調べ思考する。
                    <br />
                    「自らの手でものづくりをしたいという考え」と、「見えない人同士をつなぐWebサイトへ挑戦したい」という思いからWeb業界への転身を決意して退職する。
                  </dd>
                </div>
                <div className={clsx(styles["p-experience__list-item"])}>
                  <dt className={clsx(styles["p-experience__list-item__year"])}>
                    2020年4月
                  </dt>
                  <dd
                    className={clsx(styles["p-experience__list-item__content"])}
                  >
                    情報科学専門学校へ入学。
                    <br />
                    授業はほとんど受けず、Udemyや書籍、ネットの情報を中心にデザインの基礎やHTML/CSS（SCSS）のコーディングとVanillaJSの記述を独学。
                  </dd>
                </div>
                <div className={clsx(styles["p-experience__list-item"])}>
                  <dt className={clsx(styles["p-experience__list-item__year"])}>
                    2022年4月
                  </dt>
                  <dd
                    className={clsx(styles["p-experience__list-item__content"])}
                  >
                    現在の会社へ就職。
                    <br />
                    コーダーとして従事し、現在に至るまでに200以上のサイトを構築。
                    <br />
                    通常のサイト構築の業務以外にも、採用担当・新卒教育・改善業務・案件管理を担当する。
                  </dd>
                </div>
                <div className={clsx(styles["p-experience__list-item"])}>
                  <dt className={clsx(styles["p-experience__list-item__year"])}>
                    2025年4月
                  </dt>
                  <dd
                    className={clsx(styles["p-experience__list-item__content"])}
                  >
                    現在の会社でのスキルアップに限界点を感じ、フロントエンドエンジニアとして転職することを本気で決意。
                    <br />
                    本格的にReact.jsやNext.jsを学びながら、ポートフォリオ作成・転職活動中。
                  </dd>
                </div>
              </dl>
            </div>
          </section>
        </div>
      </FadeUpClient>
    </>
  );
}
