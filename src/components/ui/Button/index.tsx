import { forwardRef } from "react";
import Link from "next/link";
import styles from "./index.module.scss";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large" | "fit";
  target?: "_blank" | "_self";
  className?: string;
};

const Button = forwardRef<HTMLAnchorElement, ButtonProps>(
  ({ href, children, variant, size, target = "_self", className }, ref) => {
    const buttonClasses = [
      styles[`c-button`],
      styles[`c-button--${variant || "primary"}`],
      styles[`c-button--${size || "medium"}`],
      className || "",
    ].join(" ");
    return (
      <Link href={href} className={buttonClasses} target={target} ref={ref}>
        {children}
      </Link>
    );
  }
);

Button.displayName = "Button";

export default Button;
