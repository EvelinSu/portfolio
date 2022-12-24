import React from "react";
import s from "./styles.module.sass"
import PortfolioBlock from "./PortfolioBlock";
import {Slide} from "react-awesome-reveal";
import {works} from "./works";
import {TPageProps} from "../types";

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
                            link={el.link}
                            postscript={el.postscript}
                        />
                    </Slide>
                ))}
            </div>
        </section>
    )
};

export default PortfolioPage;

