import styles from "./index.module.scss";

type CategoryProps = {
  name: string;
  className?: string;
}


const Category = ({ name,className }:CategoryProps) => {
  return <span className={`${styles["c-category"]} ${className || ""}`}>{name}</span>;
};

export default Category;
