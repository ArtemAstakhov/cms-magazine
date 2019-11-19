import React from "react";
import classNames from "classnames";

import styles from "./Button.module.scss";

interface ButtonProps {
  variant?: "outlined" | "contained";
  color?: "primary" | "secondary";
  onClick: () => void;
}

export const Button: React.FunctionComponent<ButtonProps> = ({
  onClick, variant, color, children,
}) => {
  return (
    <button
      onClick={onClick}
      className={classNames(styles.button, {
        [styles.outlined]: variant === "outlined",
        [styles.primary]: color === "primary",
      })}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  variant: "contained",
  color: "primary",
};
