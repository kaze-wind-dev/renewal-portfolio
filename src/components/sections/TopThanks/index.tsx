"use client";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import styles from "./index.module.scss";
const TopThanks = ()=> {


return (
    <section className={styles["p-topThanks"]}>
        <div className={`${styles["p-topThanks__inner"]} inner`}>
          <SectionTitle
            className={styles["p-topThanks__title"]}
            heading={<>Thank you!</>}
            text={<>ご覧いただきありがとうございます</>}

          />
          <p className={styles["p-topThanks__text"]}
          >
            ポートフォリオサイトをご覧いただき、ありがとうございます。
          </p>

          <p className={styles["p-topThanks__text"]}
          >
当サイトはJS実務経験の浅い現役コーダーが作成しております。<br/>
お気づきの点や気になる点などございましたら<br/>
ぜひお気軽にお問い合わせください。
          </p>
          <Button
            className={`${styles["p-topThanks__button"]} mx-center`}
            href="/contact"
          >
            お問い合わせはこちら
          </Button>
        </div>
      </section>
)
}

export default TopThanks;