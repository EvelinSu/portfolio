import React from 'react';
import s from "./styles.module.css"

type TButtonProps = {
    label: string
    onClick?: () => void
    margin?: string
    href?: string
    target?: string
    className?: string
}

const Button = (props: TButtonProps) => {

    const onClickButtonHandler = () => {
        props.onClick && props.onClick()
    }

    return props.href ? (
            <a href={props.href} target={props.target} className={`${s.button} ${props.className}`} style={{margin: props.margin}}>
                {props.label}
            </a>
        )
        : (
            <button
                onClick={onClickButtonHandler}
                className={`${s.button} ${props.className}`}
            >
                {props.label}
            </button>
        )
};

export default Button;

