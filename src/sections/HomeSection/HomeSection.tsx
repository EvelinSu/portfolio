import { SECTIONS } from "@/common/constants";
import { TPageProps } from "@/common/types";
import { ButtonLink } from "@/components/ButtonLink";
import { Section } from "@/components/Section";
import React from "react";
import { Bounce, Fade } from "react-awesome-reveal";
import s from "./styles.module.sass";

export const HomeSection: React.FC<TPageProps> = (props) => {
  const windowWidth = window.innerWidth;

  return (
    <Section
      id={props.id}
      className={s.content}
    >
      <div className={s.shadowBox}>
        <div className={s.flexColumn}>
          <Fade
            cascade={true}
            duration={800}
            damping={1}
            delay={windowWidth > 160 ? 200 : 0}
            triggerOnce={true}
          >
            <h2 className={s.subtitle}>Привет!</h2>
            <h1 className={s.title}>
              Я<span className={"accentColor"}>frontend</span>разработчик
            </h1>
            <h2 className={s.subtitle}>
              проживаю в городе <span className={"accentColor"}>Сочи</span>
            </h2>
          </Fade>
          <Bounce
            delay={2500}
            triggerOnce={true}
            style={{ margin: "60px 0 0 0" }}
          >
            <ButtonLink
              href={`#${SECTIONS.contacts}`}
              label={"Связаться со мной"}
            />
          </Bounce>
        </div>
      </div>
    </Section>
  );
};
