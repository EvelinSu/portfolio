import React from 'react';
import {TPageProps} from "../../types";


const AboutMePage: React.FC<TPageProps> = (props) => {
    return (
        <section id={props.id}>
            <h1 className={"sectionTitle"}>
                About Me
            </h1>
            <div className={''}>

            </div>
        </section>
    );
};

export default AboutMePage;
