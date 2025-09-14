import React from "react";
import clsx from "clsx";
import { HiOutlineArrowNarrowRight,HiOutlineArrowNarrowLeft } from "react-icons/hi";

import styles from "./index.module.scss";

type Props = {
  splideRef: React.RefObject<{ go: (direction: string) => void } | null>;
  className?: string;
};

const CustomSplideArrows = ({ splideRef,className }: Props) => {
  const handlePrev = () => {
    splideRef.current?.go("-1");
  };
  const handleNext = () => {
    splideRef.current?.go("+1");
  };
  return (
    <div className={clsx(styles["c-customSplide-arrows"], className)}>
      <button
        className={clsx(styles["c-customSplide-arrow"], styles["c-customSplide-arrow--prev"])}
        onClick={handlePrev}
        aria-label="前のスライドへ"
      >
        <HiOutlineArrowNarrowLeft className={clsx(styles["c-customSplide-arrow__icon"])}/>
      </button>
      <button
        className={clsx(styles["c-customSplide-arrow"], styles["c-customSplide-arrow--newst"])}
        onClick={handleNext}
        aria-label="次のスライドへ"
        >
          <HiOutlineArrowNarrowRight className={clsx(styles["c-customSplide-arrow__icon"])}/>
      </button>
    </div>
  );
};

export default CustomSplideArrows;
