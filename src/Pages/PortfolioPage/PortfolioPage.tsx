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
                        style={{flexDirection: i % 2 === 0 ? "row-reverse" : "initial"}}
                    >
                        <PortfolioBlock
                            title={el.title}
                            link={el.link}
                            description={el.description}
                            image={el.image}
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
        title: 'Jolly, sunny pirate',
        image: 'https://i.imgur.com/iapZ8JD.png',
        description: 'Ships fall with urchin at the undead prison! Aye! Pieces o hunger are forever rough. Jolly,' +
            ' scrawny seashell. go to cabo rojo.',
        link: '//www.google.com'
    },
    {
        title: 'Greed, endurance ',
        image: 'https://i.imgur.com/Dlh1bqt.png',
        description: 'Ho-ho-ho! strength of malaria. Arrr, never crush a freebooter. Lubbers are the seas of the sunny love. Jolly, yer not' +
            ' blowing me without a desolation!',
        link: '//www.google.com'
    },
    {
        title: 'Yellow fever, love',
        image: 'https://i.imgur.com/8T4DKS2.png',
        description: 'The swashbuckling captain darkly trades the wind. Oh! Pieces o life are forever wet. Well, big' +
            ' girl. go to la marsa beach.',
        link: '//www.google.com'
    }
]