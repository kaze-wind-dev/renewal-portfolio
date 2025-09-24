import styles from "./index.module.scss";

type CardDescProps = {
  description: string;
};

const CardDescription = ({ description }: CardDescProps) => {
  return (
    <p className={`${styles["c-card__description"]}`}>{description}</p>
  );
};

export default CardDescription;
