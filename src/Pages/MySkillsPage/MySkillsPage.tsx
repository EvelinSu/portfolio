import React from "react";
import {TPageProps} from "../../types";
import s from "./styles.module.sass"
import SkillsBlock from "./SkillsBlock";

const MySkillsPage: React.FC<TPageProps> = (props) => {
    return (
        <section id={props.id}>
            <h1 className={"sections__title"}>
                My skills <div className={"sections__title-decoration"}>{props.id?.toUpperCase()}</div>
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
            <div className={s.text}>
                Aw! Pieces o' courage are forever dead. Why does the wave fall?
                Aw! Pieces o' courage are forever dead. Why does the wave fall?
            </div>
        </section>
    );
};

export default MySkillsPage;

const skills = [
    {
        icon: 'https://i.imgur.com/SkXt4tI.png',
        title: "Redux",
        description: "Cloudy, addled lubbers swiftly sail a undead, salty lass!"
    },
    {
        icon: 'https://i.imgur.com/SkXt4tI.png',
        title: "React",
        description: "styled-components, css-modules, Girl of a sunny grace, fear the halitosis!"
    },
    {
        icon: 'https://i.imgur.com/SkXt4tI.png',
        title: "JS",
        description: " Yuck, The skiff hoists with beauty, scrape the seychelles. ye mighty ale- set sails for hunger!"
    },
    {
        icon: 'https://i.imgur.com/SkXt4tI.png',
        title: "TS",
        description: " Avast, yer not hailing me without a greed! The sun waves booty like a jolly cloud!"
    },
    {
        icon: 'https://i.imgur.com/SkXt4tI.png',
        title: "Axios",
        description: "The cannibal pulls with life, break the pacific ocean before it whines"
    },
    {
        icon: 'https://i.imgur.com/SkXt4tI.png',
        title: "SASS",
        description: "flex-box, grid, BEM, variables, mixins, Seashells are the clouds of the wet love"
    },
    {
        icon: 'https://i.imgur.com/SkXt4tI.png',
        title: "styled components",
        description: "The anchor burns with riddle, pull the captain's quarters until it waves. "
    },
    {
        icon: 'https://i.imgur.com/SkXt4tI.png',
        title: "CSS modules",
        description: "flex-box, grid, BEM, variables, mixins, Seashells are the clouds of the wet love"
    },

]