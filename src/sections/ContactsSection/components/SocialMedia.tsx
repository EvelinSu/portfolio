import CodewarsIcon from "@/assets/icons/CodewarsIcon.tsx";
import GitHubIcon from "@/assets/icons/GitHubIcon.tsx";
import LinkedinIcon from "@/assets/icons/LinkedinIcon.tsx";
import TelegramIcon from "@/assets/icons/TelegramIcon.tsx";
import { Bounce } from "react-awesome-reveal";
import s from "../styles.module.sass";

export const SocialMedia = () => {
  return (
    <div className={s.mediaIconsList}>
      <Bounce
        delay={1500}
        triggerOnce={true}
        cascade={true}
      >
        <a
          href={"https://www.codewars.com/users/EvelinSu"}
          target={"_blank"}
          className={s.mediaIcon}
        >
          <CodewarsIcon />
        </a>
        <a
          href={"https://www.t.me/EvelinaSu"}
          target={"_blank"}
          className={s.mediaIcon}
        >
          <TelegramIcon />
        </a>
        <a
          href={"https://github.com/EvelinSu"}
          target={"_blank"}
          className={s.mediaIcon}
        >
          <GitHubIcon />
        </a>
        <a
          href={"https://linkedin.com/in/evelina-sukhareva-3b9670256"}
          target={"_blank"}
          className={s.mediaIcon}
        >
          <LinkedinIcon />
        </a>
      </Bounce>
    </div>
  );
};
