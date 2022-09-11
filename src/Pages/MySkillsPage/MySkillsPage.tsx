import React from "react";
import {TPageProps} from "../../types";
import s from "./styles.module.css"
import SkillsBlock from "./SkillsBlock";

const MySkillsPage: React.FC<TPageProps> = (props) => {
    return (
        <section id={props.id}>
            <h1 className={"sectionTitle"}>
                My Skills
            </h1>
            <div className={s.grid}>
                {skills.map(el => (
                    <SkillsBlock
                        title={el.title}
                        description={el.description}
                        icon={el.icon}
                    />
                ))}
            </div>
        </section>
    );
};

export default MySkillsPage;

const skills = [
    {
        icon: 'https://i.imgur.com/SkXt4tI.png',
        title: "React",
        description: "Redux, styled-components, css-modules"
    },

    {
        icon: 'https://i.imgur.com/SkXt4tI.png',
        title: "JavaScript",
        description: "Typescript"
    },
    {
        icon: 'https://i.imgur.com/SkXt4tI.png',
        title: "CSS",
        description: "SASS, BEM"
    },
    {
        icon: 'https://i.imgur.com/SkXt4tI.png',
        title: "HTML",
        description: "Trade me tobacco, ye undead landlubber! The mate grows"
    },
]