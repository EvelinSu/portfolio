import React, {useState} from 'react';
import s from "./styles.module.sass"
import ArrowUpIcon from "../../assets/icons/ArrowUpIcon";
import {SECTIONS} from "../../App";

type TSidebarProps = {
    sections: Array<string>
}

const Sidebar: React.FC<TSidebarProps> = (props) => {

    const [isOpen, setIsOpen] = useState(true)

    const mappedList = props.sections.map((el, i) => (
        <li key={i} className={s.link}>
            <a href={`#${el}`}>
                {el}
            </a>
        </li>
    ))

    const onClickHandler = () => {
        window.scrollTo(0, 0)
        setIsOpen(!isOpen)
    }

    return (
        <div className={s.sidebar}>
            <div className={s.sidebar__header}>
                <img
                    className={s.avatar}
                    src={'https://i.imgur.com/wYdLUUb.png'}
                    alt={"avatar"}
                />
                <h1>Evelina<span className={"accentColor"}>Su</span></h1>
            </div>
            <div className={s.sidebar__body}>
                <ul className={s.list}>
                    {mappedList}
                </ul>
            </div>
            <div className={s.sidebar__footer}>
                social media will be here
            </div>
            <a
                href={!isOpen ? `#${SECTIONS[0]}` : '#'}
                onClick={onClickHandler}
                className={s.icon}
            >
                <ArrowUpIcon />
            </a>
        </div>
    );
};

export default Sidebar;
