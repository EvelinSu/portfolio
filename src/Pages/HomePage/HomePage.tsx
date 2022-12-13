import React from 'react';
import s from "./styles.module.sass"
import Button from "../../components/Button/Button";
import {TPageProps} from "../types";
import {SECTIONS} from "../../App";
import {Bounce, Fade} from "react-awesome-reveal";

const HomePage: React.FC<TPageProps> = (props) => {
    const windowWidth = window.innerWidth

    return (
        <section id={props.id} className={s.content}>
            <div className={s.shadowBox}>
                <div className={s.flexColumn}>
                    <Fade
                        cascade={true}
                        duration={windowWidth > 760 ? 1000 : 500}
                        damping={1}
                        delay={windowWidth > 760 ? 1000 : 0}
                        triggerOnce={true}
                    >
                        <h2 className={s.subtitle}>
                            Welcome
                        </h2>
                        <h1 className={s.title}>
                            I'm a
                            <span className={"accentColor"}>
                            Frontend developer
                        </span>
                        </h1>
                        <h2 className={s.subtitle}>
                            based in Sochi, Russia.
                        </h2>
                    </Fade>
                    <Bounce
                        delay={windowWidth > 760 ? 4000 : 1500}
                        triggerOnce={true}
                        style={{margin: "60px 0 0 0"}
                        }
                    >
                        <Button
                            href={`#${SECTIONS[3]}`}
                            label={"Get in touch"}
                        />
                    </Bounce>
                </div>
            </div>
        </section>
    );
};

export default HomePage;
