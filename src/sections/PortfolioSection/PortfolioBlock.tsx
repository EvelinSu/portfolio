import { ButtonLink } from "@/components/ButtonLink/ButtonLink.tsx";
import { Display } from "@/components/Display";
import React from "react";
import s from "./styles.module.sass";

export type TypePortfolioBlockProps = {
  title: string;
  description: string;
  image?: string;
  demo?: string;
  link?: string;
  technologies?: string[];
  postscript?: string;
};

const PortfolioBlock: React.FC<TypePortfolioBlockProps> = (props) => {
  return (
    <div className={s.blockContainer}>
      <Display condition={!!props.image}>
        <div className={s.body}>
          <a
            className={s.imageContainer}
            href={props.link}
            target={"_blank"}
          >
            <img
              className={s.image}
              src={props.image}
              alt={"ava"}
            />
          </a>
          <Display condition={!!props.demo}>
            <div className={s.shadow}>
              <ButtonLink
                target="_blank"
                href={props.demo!}
                className={s.button}
                label={"Перейти"}
              />
            </div>
          </Display>
        </div>
      </Display>

      <div className={s.description}>
        <h1 className={s.title}>
          {props.title} {props.postscript && <span> ( {props.postscript} )</span>}
        </h1>
        <p>{props.description}</p>
        <div className={s.list}>
          {props.technologies?.map((el) => (
            <>
              <p className={s.list__item}>{el}</p>
              <div>•</div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioBlock;
