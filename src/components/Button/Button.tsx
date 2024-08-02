import { clsx } from "clsx";
import React from "react";
import s from "./styles.module.sass";

type Props = Partial<HTMLButtonElement> & {
  label: string;
  icon?: React.ReactNode;
  type?: string;
  disabled?: boolean;
  className?: string;
};

const Button = (props: Props) => {
  return (
    <button
      disabled={props.disabled}
      type={props.type}
      className={clsx(s.button, { [String(props.className)]: !!props.className })}
    >
      {props.label}
      {props.icon}
    </button>
  );
};

export default Button;
