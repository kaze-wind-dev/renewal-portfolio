import styles from "./index.module.scss";

type CardDescProps = {
  description: string;
};

const CardDescription = ({ description }: CardDescProps) => {
  return (
    <p className={`${styles["c-card__description"]}`}>制作期間 {description}</p>
  );
};

export default CardDescription;
