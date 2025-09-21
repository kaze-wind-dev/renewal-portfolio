import clsx from "clsx";
import styles from "./index.module.scss";

type CardsContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const CardsContainer = ({ children, className }: CardsContainerProps) => {
  return <div className={clsx(styles["c-cards-container"], className)}>{children}</div>;
};

export default CardsContainer;
