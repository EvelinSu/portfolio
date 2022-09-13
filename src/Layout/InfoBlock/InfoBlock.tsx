import React from 'react';
import s from "./styles.module.css"

const InfoBlock = () => {
    return (
        <div className={s.block}>
            <div className={s.shadow}>
                <h1 className={`sectionTitle ${s.title}`}>
                    I am ready to work <span className={"accentColor"}>remotely</span>
                </h1>
            </div>

        </div>
    );
};

export default InfoBlock;
