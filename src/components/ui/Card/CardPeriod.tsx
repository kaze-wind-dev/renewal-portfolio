import styles from "./index.module.scss";

type CardPeriodProps = {
  period: string;
};

const CardPeriod = ({ period }: CardPeriodProps) => {
  return <span className={`${styles["c-card__period"]}`}>制作期間 {period}</span>;
};

export default CardPeriod;