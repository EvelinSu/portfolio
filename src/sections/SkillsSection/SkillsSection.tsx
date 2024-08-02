import { TPageProps } from "@/common/types";
import { Section } from "@/components/Section";
import { Zoom } from "react-awesome-reveal";
import { skills } from "./skills";
import SkillsBlock from "./SkillsBlock";
import s from "./styles.module.sass";

export const SkillsSection: React.FC<TPageProps> = (props) => {
  return (
    <Section
      id={props.id}
      title={"Мои навыки"}
    >
      <div className={s.grid}>
        <Zoom
          cascade={true}
          duration={350}
          triggerOnce={true}
        >
          {skills.map((el, i) => (
            <SkillsBlock
              key={i}
              title={el.title}
              description={el.description}
              icon={el.icon}
            />
          ))}
        </Zoom>
      </div>
      <div className={s.text}>
        Мои навыки охватывают полный цикл разработки: от создания приложений на <span>React</span> и{" "}
        <span>TypeScript</span> до деплоя и дальнейшей настройки <span>Linux</span> сервера. Я также использую{" "}
        <span>Strapi</span> для создания админ панелей или <span>API</span>.
      </div>
    </Section>
  );
};

export default SkillsSection;
