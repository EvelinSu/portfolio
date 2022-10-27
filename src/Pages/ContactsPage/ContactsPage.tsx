import React from 'react';
import s from "./styles.module.css"
import "../../components/Form/styles.css"
import {TPageProps} from "../../types";
import PhoneIcon from "../../assets/icons/PhoneIcon";
import Form from "../../components/Form/Input/Input";
import Button from "../../components/Button/Button";
import Textarea from "../../components/Form/Textarea/Textarea";

const ContactsPage: React.FC<TPageProps> = (props) => {
    return (
        <section className={s.content} id={props.id}>
            <h1 className={"sectionTitle"}>
                Contacts<div className={"decoration"}>{props.id?.toUpperCase()}</div>
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
                        <div>
                            social media also will be here
                        </div>
                    </div>
                </div>
                <div className={s.column}>
                    <form className={"formContainer"}>
                        <div className={"formRow"}>
                            <div className={"formColumn"}>
                                <Form placeholder={"Name"} />
                            </div>
                            <div className={"formColumn"}>
                                <Form placeholder={"Email"} />
                            </div>
                        </div>
                        <div className={"formRow"}>
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
