import React from 'react';
import s from "./styles.module.css"

type TSidebarProps = {
    sections: Array<string>
}

const Sidebar: React.FC<TSidebarProps> = (props) => {

    const mappedList = props.sections.map(el => {
        return (
            <li className={s.link}>
                <a href={`#${el}`}>
                    {el}
                </a>
            </li>
        )
    })

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
        </div>
    );
};

export default Sidebar;
