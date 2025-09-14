import Link from "next/link";
import type { Works } from "@/types/microcms";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardCategory from "./CardCategory";
import CardPeriod from "./CardPeriod";
import CardTime from "./CardTime";
import CardDescription from "./CardDescription";
import CardTechStack from "./CardTechStack";
import styles from "./index.module.scss";

type WorksCardProps = {
  works: Works;
};

const WorksCard = ({works}: WorksCardProps) => {
  return (
    <article className={`${styles["c-card"]}`}>
      <Link href={`/works/${works.id}`} className={`${styles["c-card__link"]}`}>
        <CardHeader title={works.title} thumbnail={works.thumbnail}>
          <CardCategory name={works.category.name}/>
        </CardHeader>
        <CardBody>
          <CardDescription description={works.description}/>
          <CardPeriod period={works.period}/>
          <CardTime time={works.time}/>
          <CardTechStack technology_stack={works.technology_stack}/>
        </CardBody>
      </Link>
    </article>
  );
};

export default WorksCard;
