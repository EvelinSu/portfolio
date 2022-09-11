import React, {useState} from 'react';
import s from "./styles.module.css"
import ArrowUpIcon from "../../assets/icons/ArrowUpIcon";
import {SECTIONS} from "../../App";

type TSidebarProps = {
    sections: Array<string>
}

const Sidebar: React.FC<TSidebarProps> = (props) => {

    const [isOpen, setIsOpen] = useState(true)

    const mappedList = props.sections.map(el => (
        <li className={s.link}>
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
            <div className={s.sidebarHeader}>
                <img
                    className={s.avatar}
                    src={'https://i.imgur.com/wYdLUUb.png'}
                    alt={"avatar"}
                />
                <h1>Evelina<span className={"accentColor"}>Su</span></h1>
            </div>
            <div className={s.sidebarBody}>
                <ul className={s.list}>
                    {mappedList}
                </ul>
            </div>
            <div className={s.sidebarFooter}>
                social media will be here
            </div>
            <a
                href={!isOpen ? `#${SECTIONS[0]}` : '#'}
                onClick={onClickHandler}
                className={isOpen ? s.icon : `${s.icon} ${s.iconHidden}`}
            >
                <ArrowUpIcon />
            </a>
        </div>
    );
};

export default Sidebar;
