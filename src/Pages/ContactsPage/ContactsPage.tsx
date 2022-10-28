import React from 'react';
import s from "./styles.module.sass"
import "../../components/Form/styles.sass"
import {TPageProps} from "../../types";
import PhoneIcon from "../../assets/icons/PhoneIcon";
import Form from "../../components/Form/Input/Input";
import Button from "../../components/Button/Button";
import Textarea from "../../components/Form/Textarea/Textarea";
import TelegramIcon from "../../assets/icons/contacts/TelegramIcon";
import GitHubIcon from "../../assets/icons/contacts/GitHubIcon";
import LinkedinIcon from "../../assets/icons/contacts/LinkedinIcon";

const ContactsPage: React.FC<TPageProps> = (props) => {
    return (
        <section className={s.content} id={props.id}>
            <h1 className={"sections__title"}>
                Contacts<div className={"sections__title-decoration"}>{props.id?.toUpperCase()}</div>
            </h1>
            <div className={s.row}>
                <div className={s.column}>
                    <div className={s.grid}>
                        <a href={"#"} className={s.item}>
                            <PhoneIcon />
                            <div className={s.itemText}>
                                any contact
                            </div>
                        </a>
                        <a href={"#"} className={s.item}>
                            <PhoneIcon />
                            <div className={s.itemText}>
                                any contact
                            </div>
                        </a>
                        <a href={"#"} className={s.item}>
                            <PhoneIcon />
                            <div className={s.itemText}>
                                any contact
                            </div>
                        </a>
                        <a href={"#"} className={s.item}>
                            <PhoneIcon />
                            <div className={s.itemText}>
                                any contact
                            </div>
                        </a>
                    </div>
                    <div className={s.center} style={{flexDirection: "column"}}>
                        <h1>
                            MY SOCIAL MEDIA
                        </h1>
                        <div className={s.mediaIconsList}>
                            <div className={s.mediaIcon}>
                                <LinkedinIcon/>
                            </div>
                            <div className={s.mediaIcon}>
                                <TelegramIcon/>
                            </div>
                            <div className={s.mediaIcon}>
                                <GitHubIcon/>
                            </div>

                        </div>
                    </div>
                </div>
                <div className={s.column}>
                    <form className={"form__container"}>
                        <div className={"form__row"}>
                            <div className={"form__column"}>
                                <Form placeholder={"Name"} />
                            </div>
                            <div className={"form__column"}>
                                <Form placeholder={"Email"} />
                            </div>
                        </div>
                        <div className={"form__row"}>
                            <Textarea placeholder={"Message"} />
                        </div>
                        <div className={s.center}>
                            <Button className={"button"} label={"Send message"} />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactsPage;
