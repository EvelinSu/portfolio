import React from "react";
import {TPageProps} from "../../types";

const MySkillsPage: React.FC<TPageProps> = (props) => {
    return (
        <section id={props.id}>
            <h1 className={"sectionTitle"}>
                My Skills
            </h1>
        </section>
    );
};

export default MySkillsPage;
