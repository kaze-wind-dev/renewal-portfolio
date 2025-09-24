import React from "react";
import clsx from "clsx";
import { HiOutlineArrowNarrowRight,HiOutlineArrowNarrowLeft } from "react-icons/hi";
import type { Splide as SplideInstance } from "@splidejs/splide";

import styles from "./index.module.scss";

type Props = {
  splideRef: React.RefObject<{ splide: SplideInstance } | null>;
  className?: string;
};

const CustomSplideArrows = ({ splideRef,className }: Props) => {
  const handlePrev = () => {
    splideRef.current?.splide.go("-1");
  };
  const handleNext = () => {
    splideRef.current?.splide.go("+1");
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
