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
                {skills.map((el, i) => (
                    <SkillsBlock
                        key={i}
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
        description: "Redux, styled-components, css-modules, Girl of a sunny grace, fear the halitosis! Lord, black wind. you won't pull the fortress."
    },

    {
        icon: 'https://i.imgur.com/SkXt4tI.png',
        title: "JavaScript",
        description: "Typescript, Yuck, The skiff hoists with beauty, scrape the seychelles. ye mighty ale- set sails for hunger!"
    },
    {
        icon: 'https://i.imgur.com/SkXt4tI.png',
        title: "CSS",
        description: "SASS, BEM, Seashells are the clouds of the wet love. Where is the fine mate? never burn a codfish. Love is an evil reef."
    },
    {
        icon: 'https://i.imgur.com/SkXt4tI.png',
        title: "HTML",
        description: "The cannibal pulls with life, break the pacific ocean before it whines. Trade me tobacco, ye undead landlubber! The mate grows"
    },
]