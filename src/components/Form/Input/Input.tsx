import React, {ChangeEvent, FC, useState} from 'react';
import "../styles.css"

type TFormProps = {
    placeholder: string,
}

const Input: FC<TFormProps> = (props) => {

    const [value, setValue] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <input
            className={"input"}
            placeholder={props.placeholder}
            value={value}
            onChange={onChangeHandler}
        />
    );
};

export default Input;
