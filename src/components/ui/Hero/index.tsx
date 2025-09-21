
import styles from "./index.module.scss";

export interface HeroProps {
  heading: string;
  subTitle: string;
  pageDescription?: React.ReactNode;
  className?: string;
};

const Hero = ({ heading, subTitle, pageDescription, className }: HeroProps) => {
  return (
    <section className={`l-hero ${styles["c-hero"]} ${className || ""}`}>
      <div className={`${styles["c-hero__inner"]} inner`}>
        <hgroup className={`${styles["c-hero__title"]}`}>
          <h1 className={`${styles["c-hero__heading"]}`}>{heading}</h1>
          <p className={`${styles["c-hero__sub-title"]}`}>{subTitle}</p>
        </hgroup>
        {pageDescription && (
        <p className={`${styles["c-hero__description"]}`}>{pageDescription}</p>
        )}
      </div>
    </section>
  );
};

export default Hero;
