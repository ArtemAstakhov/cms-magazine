import React from "react";
import classNames from "classnames";

import styles from "./Checkbox.module.scss";

interface CheckboxProps {
  color?: "primary";
  value: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: React.FunctionComponent<CheckboxProps> = ({
  color, checked, ...props
}) => {
  return (
    <label
      className={classNames(styles.checkbox, {
        [styles.checked]: checked,
      })}
    >
      <input
        type="checkbox"
        checked={checked}
        {...props}
      />
    </label>
  )
}

Checkbox.defaultProps = {
  color: "primary",
};
