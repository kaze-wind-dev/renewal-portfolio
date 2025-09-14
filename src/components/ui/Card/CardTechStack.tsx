import styles from "./index.module.scss";

type CardTechStackProps = {
  technology_stack: string[];
};

const CardTechStack = ({ technology_stack }: CardTechStackProps) => {
  return (
    <div className={`${styles["c-card__technology-stack"]}`}>
      {
        technology_stack.map((technology) => (
          <span className={`${styles["c-card__technology-stack__item"]}`} key={technology}>
            {technology}
          </span>
        ))
      }
    </div>
  );
};

export default CardTechStack;
