import React from 'react';
import s from "./styles.module.sass"
import "../../components/Form/styles.module.sass"
import {TPageProps} from "../../types";
import PhoneIcon from "../../assets/icons/PhoneIcon";
import TelegramIcon from "../../assets/icons/contacts/TelegramIcon";
import GitHubIcon from "../../assets/icons/contacts/GitHubIcon";
import LinkedinIcon from "../../assets/icons/contacts/LinkedinIcon";
import {Bounce, Fade} from "react-awesome-reveal";
import SendEmail from "./SendEmail";

const ContactsPage: React.FC<TPageProps> = (props) => {
    return (
        <section className={s.content} id={props.id}>
            <h1 className={"sections__title"}>
                Contacts
                <div className={"sections__title-decoration"}>{props.id?.toUpperCase()}</div>
            </h1>
            <div className={s.row}>
                <div className={s.column}>
                    <div className={s.grid}>
                        <Fade triggerOnce={true} cascade={true}>
                            <a href={"#"} className={s.item}>
                                <PhoneIcon />
                                <div className={s.itemText}>
                                    contact
                                </div>
                            </a>
                            <a href={"#"} className={s.item}>
                                <PhoneIcon />
                                <div className={s.itemText}>
                                    contact
                                </div>
                            </a>
                            <a href={"#"} className={s.item}>
                                <PhoneIcon />
                                <div className={s.itemText}>
                                    contact
                                </div>
                            </a>
                            <a href={"#"} className={s.item}>
                                <PhoneIcon />
                                <div className={s.itemText}>
                                    contact
                                </div>
                            </a>
                        </Fade>
                    </div>
                    <div className={s.center} style={{flexDirection: "column"}}>
                        <h1>
                            MY SOCIAL MEDIA
                        </h1>
                        <div className={s.mediaIconsList}>
                            <Bounce delay={2000} triggerOnce={true} cascade={true}>
                                <div className={s.mediaIcon}>
                                    <LinkedinIcon />
                                </div>
                                <div className={s.mediaIcon}>
                                    <TelegramIcon />
                                </div>
                                <div className={s.mediaIcon}>
                                    <GitHubIcon />
                                </div>
                            </Bounce>
                        </div>
                    </div>
                </div>
                <div className={s.column}>
                    <SendEmail/>
                </div>
            </div>
        </section>
    );
};

export default ContactsPage;
