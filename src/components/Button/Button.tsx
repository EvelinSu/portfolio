import React from 'react';
import s from "./styles.module.sass"

type DefaultButtonPropsType = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type TButtonProps = DefaultButtonPropsType & {
    label: string
    onClick?: () => void
    margin?: string
    href?: string
    target?: string
    className?: string
    icon?: React.ReactNode
}

const Button = (props: TButtonProps) => {

    const onClickButtonHandler = () => {
        props.onClick && props.onClick()
    }

    return props.href
        ? <a href={props.href}
             target={props.target}
             className={`${s.button} ${props.className}`}
             style={{margin: props.margin}}
        >
            {props.label}
        </a>
        : <button
            onClick={onClickButtonHandler}
            {...props}
            className={`${s.button} ${props.className}`}
        >
            {props.label}
            {props.icon}
        </button>
};

export default Button;

