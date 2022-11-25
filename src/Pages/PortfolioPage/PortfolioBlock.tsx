import React from 'react';
import s from "./styles.module.sass";
import Button from "../../components/Button/Button";

type TypePortfolioBlockProps = {
    title: string,
    description: string,
    image: string
    demo?: string
    postscript?: string
}

const PortfolioBlock: React.FC<TypePortfolioBlockProps> = (props) => {
    return (
        <div className={s.blockContainer}>
            <div className={s.body}>
                <a className={s.imageContainer} href={props.image} target={"_blank"}>
                    <img className={s.image} src={props.image} alt={'ava'}/>
                </a>

                {props.demo && (
                    <div className={s.shadow}>
                        <Button target="_blank" href={props.demo} className={s.button} label={"Demo"}/>
                    </div>
                )}

            </div>
            <div className={s.description}>
                <h1 className={s.title}>
                    {props.title}
                    {props.postscript && <span> ( {props.postscript} )</span>}

                </h1>
                <p>
                    {props.description}
                </p>
            </div>

        </div>
    );
};

export default PortfolioBlock;
