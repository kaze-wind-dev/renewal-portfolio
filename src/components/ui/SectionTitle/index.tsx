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
      <h2 className={clsx(styles['c-sectionTitle__heading'])}>{heading}</h2>
      <p className={clsx(styles['c-sectionTitle__text'])}>{text}</p>
    </hgroup>
  );
};


export default SectionTitle;
