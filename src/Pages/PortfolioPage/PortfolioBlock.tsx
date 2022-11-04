import React from 'react';
import s from "./styles.module.sass";
import Button from "../../components/Button/Button";
import {bool} from "yup";

type TypePortfolioBlockProps = {
    title: string,
    description: string,
    image: string
    link?: string
    inProgress?: boolean
}

const PortfolioBlock: React.FC<TypePortfolioBlockProps> = (props) => {
    return (
        <div className={s.blockContainer}>
            <div className={s.body}>
                <img className={s.image} src={props.image} alt={'ava'}/>

                {props.link && (
                    <div className={s.shadow}>
                        <Button target="_blank" href={props.link} className={s.button} label={"Demo"}/>
                    </div>
                )}

            </div>
            <div className={s.description}>
                <h1 className={s.title}>
                    {props.title}
                    {props.inProgress && <span> ( in progress )</span>}

                </h1>
                <p>
                    {props.description}
                </p>
            </div>

        </div>
    );
};

export default PortfolioBlock;
