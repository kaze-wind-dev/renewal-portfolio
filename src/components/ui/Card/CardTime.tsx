import styles from "./index.module.scss";

type CardTimeProps = {
  time: string;
};

const CardTime = ({ time }: CardTimeProps) => {
  return <span className={`${styles["c-card__time"]}`}>制作時間 {time}時間</span>;
};

export default CardTime;
