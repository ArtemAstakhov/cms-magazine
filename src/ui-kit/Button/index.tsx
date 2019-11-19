import React from "react";

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
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  variant: "contained",
  color: "primary",
};
