import s from "@/components/Button/styles.module.sass";
import { clsx } from "clsx";
import React from "react";

type Props = Partial<HTMLAnchorElement> & {
  label: string;
  margin?: string;
  icon?: React.ReactNode;
};

export const ButtonLink = (props: Props) => {
  return (
    <a
      href={props.href}
      target={props.target}
      className={clsx(s.button, { [String(props.className)]: !!props.className })}
      style={{ margin: props.margin }}
    >
      {props.label}
    </a>
  );
};
