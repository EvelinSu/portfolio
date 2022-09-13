import React, {FC} from 'react';

type TTextareaProps = {
    placeholder: string,
}

const Textarea: FC<TTextareaProps> = (props) => {
    return (
       <textarea
           className={"textarea"}
           placeholder={props.placeholder}
       />
    );
};

export default Textarea;
