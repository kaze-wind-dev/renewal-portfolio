import clsx from "clsx";
import styles from "./index.module.scss";

type SectionTitleProps = {
className? : string,
position?: "left"|"right"|"center",
heading:React.ReactNode,
text:React.ReactNode,
};

const SectionTitle = ({
  className,
  position = "center",
  heading,
  text
}: SectionTitleProps) => {
  const parentClasses = clsx([
    styles['c-sectionTitle'],
    styles[`c-sectionTitle--${position}`],
  ]);

  return (
    <hgroup className={clsx(parentClasses, className)}>
      <h2 className={clsx(styles['c-sectionTitle__heading'], "js-section-title-heading")}>{heading}</h2>
      <p className={clsx(styles['c-sectionTitle__text'], "js-section-title-text")} aria-hidden="true"><span>{text}</span></p>
    </hgroup>
  );
};


export default SectionTitle;
