import { TPageProps } from "@/common/types";
import { Section } from "@/components/Section";
import { Slide } from "react-awesome-reveal";
import PortfolioBlock from "./PortfolioBlock";
import s from "./styles.module.sass";
import { works } from "./works";

export const PortfolioSection: React.FC<TPageProps> = (props) => {
  const windowWidth = window.innerWidth;

  return (
    <Section
      id={props.id}
      title={"Мои работы"}
    >
      <div className={s.flex}>
        {works.map((el, i) => (
          <Slide
            key={i}
            direction={windowWidth > 1050 ? (i % 2 === 0 ? "left" : "right") : "right"}
            duration={500}
            triggerOnce={true}
            style={{ display: "flex", flexDirection: i % 2 === 0 ? "row-reverse" : "initial" }}
          >
            <PortfolioBlock
              title={el.title}
              demo={el.demo}
              description={el.description}
              image={el?.image}
              technologies={el.technologies}
              link={el?.link}
              postscript={el?.postscript}
            />
          </Slide>
        ))}
      </div>
    </Section>
  );
};
