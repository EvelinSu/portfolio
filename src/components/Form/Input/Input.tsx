import React, {ChangeEvent, DetailedHTMLProps, FC, InputHTMLAttributes} from 'react';
import s from "../styles.module.sass"


type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type TFormProps = {
    error?: string
}

const Input: FC<TFormProps & DefaultInputPropsType> = (props) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange && props.onChange(e)
    }

    return (
        <input
            className={`${!!props.error && s.form__error} ${s.input}`}
            onChange={onChangeHandler}
            {...props}
        />
    );
};

export default Input;
