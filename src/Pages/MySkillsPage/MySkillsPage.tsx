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
import {Zoom} from "react-awesome-reveal";

const MySkillsPage: React.FC<TPageProps> = (props) => {
    return (
        <section id={props.id}>
            <h1 className={"sections__title"}>
                My skills <div className={"sections__title-decoration"}>{props.id?.toUpperCase()}</div>
            </h1>
            <div className={s.grid}>
                <Zoom cascade={true} duration={350} triggerOnce={true}>
                    {skills.map((el, i) => (
                        <SkillsBlock
                            key={i}
                            title={el.title}
                            description={el.description}
                            icon={el.icon}
                        />

                    ))}
                </Zoom>
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
        icon: <ReactIcon />,
        title: "React",
        description: "JavaScript-based UI development library."
    },
    {
        icon: <ReduxIcon />,
        title: "Redux",
        description: "JavaScript library for managing and centralizing application state."
    },
    {
        icon: <JavaScriptIcon />,
        title: "JavaScript",
        description: "The Programming Language for the Web that conforms to the ECMAScript specification. "
    },
    {
        icon: <TypeScriptIcon />,
        title: "TypeScript",
        description: "A syntactic superset of JavaScript which adds static typing."
    },
    {
        icon: <APIIcon />,
        title: "Rest API",
        description: "Architectural style for an application program interface (API) that uses HTTP requests to access and use data."
    },
    {
        icon: <StyledComponentsIcon />,
        title: "Styled Components",
        description: "Is a CSS-in-JS styling solution that creates a platform for developers to write actual CSS to style components."
    },
    {
        icon: <SassIcon />,
        title: "SASS",
        description: "Sass is a CSS preprocessor, which adds special features such as variables, nested rules and mixins into regular CSS."
    },
    {
        icon: <AxiosIcon />,
        title: "Axios",
        description: "Promise-based library used with Node.js and browser to make asynchronous JavaScript HTTP requests."
    },
    {
        icon: <FormikIcon />,
        title: "Formik",
        description: "Small group of React components and hooks for building forms in React and React Native."
    },
    {
        icon: <JestIcon />,
        title: "Jest",
        description: "JavaScript library for creating, running, and structuring tests."
    },

]