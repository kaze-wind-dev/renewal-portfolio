
import styles from "./index.module.scss";

type CardBodyProps = {
  children: React.ReactNode;
};

const CardBody = ({children }: CardBodyProps) => {
  return (
    <div className={`${styles["c-card__body"]}`}>
      {children}
    </div>
  );
};

export default CardBody;
