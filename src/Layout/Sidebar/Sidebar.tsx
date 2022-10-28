import React, {useState} from 'react';
import s from "./styles.module.sass"
import ArrowUpIcon from "../../assets/icons/ArrowUpIcon";
import {SECTIONS} from "../../App";
import EmailIcon from '../../assets/icons/contacts/EmailIcon';
import PhoneIcon from '../../assets/icons/contacts/PhoneIcon';
import PortfolioIcon from "../../assets/icons/contacts/PortfolioIcon";

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
                <a href={'tel:+79951232188'} className={s.mediaIcon}>
                    <PhoneIcon />
                </a>
                <a href={'mailto:eveelinsu@gmail.com'} className={s.mediaIcon}>
                    <EmailIcon />
                </a>
                <a href={'https://www.google.com'} target="_blank" className={s.mediaIcon}>
                    <PortfolioIcon />
                </a>
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
