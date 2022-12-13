import React from 'react';
import s from "./styles.module.sass"
import "../../components/Form/styles.module.sass"
import {TPageProps} from "../types";
import PhoneIcon from "../../assets/icons/PhoneIcon";
import TelegramIcon from "../../assets/icons/contacts/TelegramIcon";
import GitHubIcon from "../../assets/icons/contacts/GitHubIcon";
import {Bounce, Fade} from "react-awesome-reveal";
import SendEmail from "./SendEmail";
import EmailIcon from "../../assets/icons/contacts/EmailIcon";
import CodewarsIcon from "../../assets/icons/contacts/CodewarsIcon";
import LocationIcon from "../../assets/icons/contacts/LocationIcon";
import LinkedinIcon from "../../assets/icons/contacts/LinkedinIcon";

const ContactsPage: React.FC<TPageProps> = (props) => {
    return (
        <section className={s.content} id={props.id}>
            <h1 className={"sections__title"}>
                Contacts
                <div className={"sections__title-decoration"}>
                    {props.id?.toUpperCase()}
                </div>
            </h1>
            <div className={s.row}>
                <div className={s.column}>
                    <div className={s.contacts}>
                        <Fade triggerOnce={true} cascade={true} duration={1000}>
                            <a href={'tel:+79951232188'} className={s.item}>
                                <PhoneIcon />
                                <div className={s.itemText}>
                                    +7(995)123-21-88
                                </div>
                            </a>
                            <a href={'mailto:eveelinsu@gmail.com'} className={s.item}>
                                <EmailIcon />
                                <div className={s.itemText}>
                                    eveelinsu@gmail.com
                                </div>
                            </a>
                            <div className={s.item}>
                                <LocationIcon />
                                <div className={s.itemText}>
                                    Sochi, Russia
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <div className={s.center} style={{flexDirection: "column"}}>
                        <h1>
                            MY SOCIAL MEDIA
                        </h1>
                        <div className={s.mediaIconsList}>
                            <Bounce delay={1500} triggerOnce={true} cascade={true}>
                                <a href={"https://www.codewars.com/users/EvelinSu"}
                                   target={"_blank"}
                                   className={s.mediaIcon}
                                >
                                    <CodewarsIcon />
                                </a>
                                <a href={"https://www.t.me/EvelinaSu"}
                                   target={"_blank"}
                                   className={s.mediaIcon}
                                >
                                    <TelegramIcon />
                                </a>
                                <a href={"https://github.com/EvelinSu"}
                                   target={"_blank"}
                                   className={s.mediaIcon}
                                >
                                    <GitHubIcon />
                                </a>
                                <a href={"https://linkedin.com/in/evelina-sukhareva-3b9670256"}
                                   target={"_blank"}
                                   className={s.mediaIcon}
                                >
                                    <LinkedinIcon />
                                </a>
                            </Bounce>
                        </div>
                    </div>
                </div>
                <div className={s.column}>
                    <SendEmail />
                </div>
            </div>
        </section>
    );
};

export default ContactsPage;
