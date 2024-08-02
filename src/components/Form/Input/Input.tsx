import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";
import s from "../styles.module.sass";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type TFormProps = {
  error?: string;
};

const Input: FC<TFormProps & DefaultInputPropsType> = (props) => {
  return (
    <input
      className={`${!!props.error && s.form__error} ${s.input}`}
      {...props}
    />
  );
};

export default Input;
