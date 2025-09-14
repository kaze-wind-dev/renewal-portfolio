import { FaHeart } from "react-icons/fa6";
import styles from "./index.module.scss";

type CardLikedCountProps = {
  liked_count: number;
};

const CardLikedCount = ({ liked_count }: CardLikedCountProps) => {
  return <span className={`${styles["c-card__liked-count"]}`}><FaHeart />{liked_count}</span>;
};

export default CardLikedCount;
