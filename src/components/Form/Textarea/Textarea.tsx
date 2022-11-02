import React, {FC} from 'react';
import s from "../styles.module.sass";

type DefaultTextareaType = React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>

type TTextareaProps = DefaultTextareaType & {
    error?: string
}

const Textarea: FC<TTextareaProps> = (props) => {
    return (
       <textarea
           className={`${!!props.error && s.form__error} ${s.textarea}`}
           {...props}
       />
    );
};

export default Textarea;
