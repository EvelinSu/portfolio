import React from "react";
import {TPageProps} from "../../types";
import s from "./styles.module.sass"
import PortfolioBlock from "./PortfolioBlock";
import {Slide} from "react-awesome-reveal";
import inFutureImg from "../../assets/img/in-future.jpeg"

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
                        style={{flexDirection: i % 2 === 0 ? "row-reverse" : "initial"}}
                    >
                        <PortfolioBlock
                            title={el.title}
                            demo={el.demo}
                            description={el.description}
                            image={el.image}
                            inProgress={el.inProgress}
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
        title: 'Social network',
        image: "https://i.imgur.com/yD4adaM.png",
        description: 'This is my research project, sharpening skills. Stack: React, Redux, TypeScript,' +
            ' Styled-components, Redux-toolkit, Redux Thunk, Axios, React Router DOM, Formik + Yup, REST API, Jest',
        demo: 'https://evelinsu.github.io/samurai-way-main/#/',
        code: 'https://github.com/EvelinSu/samurai-way-main',
        inProgress: true
    },
    {
        title: 'Learning by cards',
        image: "https://i.imgur.com/HL3L7T5.png",
        description: 'Applications for learning by cards. Stack: React, Redux, TypeScript, Styled-components,' +
            ' Redux-toolkit, Redux Thunk, Axios, React Router DOM v6, REST API, Formik + Yup',
        demo: 'https://evelinsu.github.io/friday-project/#/',
        code: 'https://github.com/EvelinSu/friday-project',
        inProgress: true
    },
    {
        title: 'In future',
        image: inFutureImg,
        description: 'The swashbuckling captain darkly trades the wind. Oh! Pieces o life are forever wet. Well, big' +
            ' girl. go to la marsa beach.',
        demo: '',
        code: '',
        inProgress: false
    }
]