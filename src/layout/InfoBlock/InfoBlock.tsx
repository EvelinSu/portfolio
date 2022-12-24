import React from 'react';
import s from "./styles.module.sass"
import {JackInTheBox} from "react-awesome-reveal";

const InfoBlock = () => {
    return (
        <div className={s.block}>
            <div className={s.shadow}>
                <h1 className={`sections__title ${s.title}`}>
                    I am ready to work
                    <JackInTheBox triggerOnce={true}>
                        <span className={"accentColor"}>remotely</span>
                    </JackInTheBox>
                </h1>
            </div>
        </div>
    );
};

export default InfoBlock;
