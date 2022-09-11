import React from 'react';
import s from "./styles.module.css"

type TSkillsBlockProps = {
    title: string,
    icon: string,
    description: string
}

const SkillsBlock: React.FC<TSkillsBlockProps> = (props) => {
    return (
        <div className={s.skillsBlock}>
            <div className={s.header}>
                <img className={s.icon} src={props.icon} alt={props.title}/>
                <h1 className={s.title}>
                    {props.title}
                </h1>
            </div>

            <p className={s.description}>
                {props.description}
            </p>
        </div>
    );
};

export default SkillsBlock;


