import ArrowUpIcon from "@/assets/icons/ArrowUpIcon";
import EmailIcon from "@/assets/icons/EmailIcon.tsx";
import PhoneDefaultIcon from "@/assets/icons/PhoneDefaultIcon.tsx";
import myPhoto from "@/assets/img/myPngPhoto.png";
import { SECTIONS } from "@/common/constants";
import { useState } from "react";
import s from "./styles.module.sass";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const mappedList = Object.values(SECTIONS).map((el, i) => (
    <li
      key={i}
      className={s.link}
    >
      <a href={`#${el}`}>{el}</a>
    </li>
  ));

  const onClickHandler = () => {
    window.scrollTo(0, 0);
    setIsOpen(!isOpen);
  };

  return (
    <div className={s.sidebar}>
      <div className={s.sidebar__header}>
        <img
          className={s.avatar}
          src={myPhoto}
          alt={"avatar"}
        />
        <h1>
          Эвелина<span className={"accentColor"}>Сухарева</span>
        </h1>
      </div>
      <div className={s.sidebar__body}>
        <ul className={s.list}>{mappedList}</ul>
      </div>
      <div className={s.sidebar__footer}>
        <a
          href={"tel:+79951232188"}
          className={s.mediaIcon}
        >
          <PhoneDefaultIcon />
        </a>
        <a
          href={"mailto:eveelinsu@gmail.com"}
          className={s.mediaIcon}
        >
          <EmailIcon />
        </a>
        {/*<a*/}
        {/*  href={cv}*/}
        {/*  target={"_blank"}*/}
        {/*  className={s.mediaIcon}*/}
        {/*>*/}
        {/*  <PortfolioIcon />*/}
        {/*</a>*/}
      </div>
      <a
        href={!isOpen ? `#${SECTIONS.main}` : "#"}
        onClick={onClickHandler}
        className={s.icon}
      >
        <ArrowUpIcon />
      </a>
    </div>
  );
};
