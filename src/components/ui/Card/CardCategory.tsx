import styles from "./index.module.scss";
import Category from "../Category";

type CardCategoryProps = {
  name: string;
};

const CardCategory = ({ name }: CardCategoryProps) => {
  return (
    <div className={`${styles["c-card__category-wrapper"]}`}>
      <Category name={name} />
    </div>
  );
};

export default CardCategory;
