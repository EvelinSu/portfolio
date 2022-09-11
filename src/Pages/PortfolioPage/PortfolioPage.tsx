import React from "react";
import {TPageProps} from "../../types";

const PortfolioPage: React.FC<TPageProps> = (props) => {
    return (
        <section id={props.id}>
            <h1 className={"sectionTitle"}>
                My works
            </h1>
        </section>
    );
};

export default PortfolioPage;
