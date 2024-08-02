import { clsx } from "clsx";
import React, { FC } from "react";
import s from "../styles.module.sass";

type DefaultTextareaType = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

type TTextareaProps = DefaultTextareaType & {
  error?: string;
};

const Textarea: FC<TTextareaProps> = (props) => {
  return (
    <textarea
      className={clsx(s.textarea, { [s.form__error]: !!props.error })}
      {...props}
    />
  );
};

export default Textarea;
