import React from 'react';
import s from "./styles.module.css"
import Button from "../../components/Button/Button";
import {TPageProps} from "../../types";
import {SECTIONS} from "../../App";

const HomePage: React.FC<TPageProps> = (props) => {

    return (
        <section id={props.id} className={s.content}>
            <div className={s.shadowBox}>
                <div className={s.flexColumn}>
                    <h2 className={s.subtitle}>
                        Welcome
                    </h2>
                    <h1 className={s.title}>
                        I'm a junior
                        <span className={"accentColor"}>
                            frontend developer
                        </span>
                    </h1>
                    <h2 className={s.subtitle}>
                        based in Sochi, Russia.
                    </h2>
                    <Button
                        href={`#${SECTIONS[4]}`}
                        margin={"40px 0 0 0"}
                        label={"Get in touch"}
                    />
                </div>
            </div>
        </section>
    );
};

export default HomePage;
