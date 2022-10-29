import React from "react";
import {TPageProps} from "../../types";
import s from "./styles.module.sass"
import SkillsBlock from "./SkillsBlock";
import AxiosIcon from "../../assets/icons/skills/AxiosIcon";
import ReactIcon from "../../assets/icons/skills/ReactIcon";
import ReduxIcon from "../../assets/icons/skills/ReduxIcon";
import JavaScriptIcon from "../../assets/icons/skills/JavaScriptIcon";
import TypeScriptIcon from "../../assets/icons/skills/TypeScriptIcon";
import FormikIcon from "../../assets/icons/skills/FormikIcon";
import SassIcon from "../../assets/icons/skills/SassIcon";
import StyledComponentsIcon from "../../assets/icons/skills/StyledComponentsIcon";
import JestIcon from "../../assets/icons/skills/JestIcon";
import APIIcon from "../../assets/icons/skills/APIIcon";

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
                For styling, I can work with both <span>CSS</span> and <span>SASS</span> (with <span>BEM</span>).
                For the React I prefer use <span>styled-components</span>, but I can also
                work with <span>CSS-modules</span>.
            </div>
        </section>
    );
};

export default MySkillsPage;

const skills = [
    {
        icon: <ReactIcon/>,
        title: "React",
        description: "styled-components, css-modules, Girl of a sunny grace, fear the halitosis!"
    },
    {
        icon: <ReduxIcon/>,
        title: "Redux",
        description: "Cloudy, addled lubbers swiftly sail a undead, salty lass!"
    },
    {
        icon: <JavaScriptIcon/>,
        title: "JavaScript",
        description: " Yuck, The skiff hoists with beauty, scrape the seychelles. ye mighty ale- set sails for hunger!"
    },
    {
        icon: <TypeScriptIcon/>,
        title: "TypeScript",
        description: " Avast, yer not hailing me without a greed! The sun waves booty like a jolly cloud!"
    },
    {
        icon: <APIIcon/>,
        title: "Rest API",
        description: "The cannibal pulls with life, break the pacific ocean before it whines"
    },
    {
        icon: <StyledComponentsIcon/>,
        title: "Styled Components",
        description: "The cannibal pulls with life, break the pacific ocean before it whines"
    },
    {
        icon: <SassIcon/>,
        title: "SASS",
        description: "The cannibal pulls with life, break the pacific ocean before it whines"
    },
    {
        icon: <AxiosIcon/>,
        title: "Axios",
        description: "The cannibal pulls with life, break the pacific ocean before it whines"
    },
    {
        icon: <FormikIcon/>,
        title: "Formik",
        description: "The cannibal pulls with life, break the pacific ocean before it whines"
    },
    {
        icon: <JestIcon/>,
        title: "Jest",
        description: "The cannibal pulls with life, break the pacific ocean before it whines"
    },

]