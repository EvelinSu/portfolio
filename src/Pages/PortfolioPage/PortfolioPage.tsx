import React from "react";
import {TPageProps} from "../../types";
import s from "./styles.module.sass"
import PortfolioBlock from "./PortfolioBlock";
import {Slide} from "react-awesome-reveal";

const PortfolioPage: React.FC<TPageProps> = (props) => {

    const windowWidth = window.innerWidth

    return (
        <section className={s.content} id={props.id}>
            <h1 className={"sections__title"}>
                My works <div className={"sections__title-decoration"}>{props.id?.toUpperCase()}</div>
            </h1>
            <div className={s.flex}>
                {works.map((el, i) => (
                    <Slide
                        key={i}
                        direction={windowWidth > 1050 ? (i % 2 === 0 ? "left" : "right") : "right"}
                        duration={500}
                        triggerOnce={true}
                        style={{display: "flex", flexDirection: i % 2 === 0 ? "row-reverse" : "initial"}}
                    >
                        <PortfolioBlock
                            title={el.title}
                            demo={el.demo}
                            description={el.description}
                            image={el.image}
                            postscript={el.postscript}
                        />
                    </Slide>
                ))}
            </div>
        </section>
    )
        ;
};

export default PortfolioPage;

const works = [
    {
        title: 'Learning by cards',
        image: "https://i.imgur.com/pZq5sBS.jpg",
        description: 'Applications for learning by cards. Stack: React, Redux, TypeScript, Styled-components,' +
            ' Redux-toolkit, Redux Thunk, Axios, React Router DOM v6, REST API, Formik + Yup',
        demo: 'https://evelinsu.github.io/friday-project/#/',
        code: 'https://github.com/EvelinSu/friday-project',
        postscript: ""
    },
    {
        title: 'Social network',
        image: "https://i.imgur.com/yD4adaM.png",
        description: 'This is my research project, sharpening skills. Stack: React, Redux, TypeScript,' +
            ' Styled-components, Redux-toolkit, Redux Thunk, Axios, React Router DOM, Formik + Yup, REST API, Jest',
        demo: 'https://evelinsu.github.io/social-network/#/',
        code: 'https://github.com/EvelinSu/social-network',
        postscript: "in progress"
    },

    {
        title: 'Corporate application',
        image: "https://i.imgur.com/VRGpGnW.jpg",
        description: 'A corporate application for tracking sensor readings, tracking employee tasks (like in Jira), ' +
            'storing data about orders, about completed tasks',
        demo: '',
        code: '',
        postscript: ''
    },
]