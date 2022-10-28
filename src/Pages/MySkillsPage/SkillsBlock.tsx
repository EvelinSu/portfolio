import React, {useState} from 'react';
import s from "./styles.module.sass"

type TSkillsBlockProps = {
    title: string,
    icon: string,
    description: string
}

const SkillsBlock: React.FC<TSkillsBlockProps> = (props) => {

    const [isHovered, setIsHovered] = useState(false)

    const hoveredStyles = {
        zIndex: 0,
        transform: "scale(1)"
    }

    return (
        <div
            className={s.block}
            onClick={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className={`${s.block__description}`}
                style={isHovered ? hoveredStyles : {}}
            >
                { isHovered && props.description}
            </div>
            <div className={s.header}>
                <img className={s.icon} src={props.icon} alt={props.title}/>
            </div>
            <div className={s.body}>
                <h1 className={s.title}>
                    {props.title}
                </h1>
            </div>
        </div>
    );
};

export default SkillsBlock;


