import React from "react";
import {TPageProps} from "../types";
import s from "./styles.module.sass"
import SkillsBlock from "./SkillsBlock";
import {Zoom} from "react-awesome-reveal";
import {skills} from "./skills";

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
                For the React I prefer to use <span>styled-components</span>, but I can also
                work with <span>CSS-modules</span>.
            </div>
        </section>
    );
};

export default MySkillsPage;