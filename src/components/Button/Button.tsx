import React from 'react';
import s from "./styles.module.css"

type TButtonProps = {
    label: string
    onClick?: () => void
    margin?: string
    href?: string
}

const Button = (props: TButtonProps) => {

    const onClickButtonHandler = () => {
        props.onClick && props.onClick()
    }

    return props.href ? (
            <a href={props.href} className={s.button} style={{margin: props.margin}}>
                {props.label}
            </a>
        )
        : (
            <button onClick={onClickButtonHandler} className={s.button} style={{margin: props.margin}}>
                {props.label}
            </button>
        )

};

export default Button;
