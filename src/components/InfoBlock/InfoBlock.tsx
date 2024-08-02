import { clsx } from "clsx";
import { JackInTheBox } from "react-awesome-reveal";
import s from "./styles.module.sass";

export const InfoBlock = () => {
  return (
    <div className={s.block}>
      <div className={s.shadow}>
        <h1 className={clsx("sections__title", s.title)}>
          Готова работать
          <JackInTheBox triggerOnce={true}>
            <span className={"accentColor"}>удаленно</span>
          </JackInTheBox>
        </h1>
      </div>
    </div>
  );
};
