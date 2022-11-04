import React from "react";
import {TPageProps} from "../../types";
import s from "./styles.module.sass"
import PortfolioBlock from "./PortfolioBlock";
import {Slide} from "react-awesome-reveal";
import socialNetworkImg from "../../assets/img/social-network.jpg"
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
                            link={el.link}
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
        image: socialNetworkImg,
        description: 'This is my research project, sharpening skills. \r\n Stack: React, Redux, TypeScript,' +
            ' Styled-components, Redux Thunk, Axios, React Router DOM, Formik + Yup, REST API, Jest',
        link: 'https://evelinsu.github.io/samurai-way-main/#/',
        inProgress: true
    },
    {
        title: 'In future',
        image: inFutureImg,
        description: 'Ho-ho-ho! strength of malaria. Arrr, never crush a freebooter. Lubbers are the seas of the sunny love. Jolly, yer not' +
            ' blowing me without a desolation!',
        link: '',
        inProgress: false
    },
    {
        title: 'In future',
        image: inFutureImg,
        description: 'The swashbuckling captain darkly trades the wind. Oh! Pieces o life are forever wet. Well, big' +
            ' girl. go to la marsa beach.',
        link: '',
        inProgress: false
    }
]