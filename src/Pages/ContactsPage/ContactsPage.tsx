import React from 'react';
import {TPageProps} from "../../types";

const ContactsPage: React.FC<TPageProps> = (props) => {
    return (
        <section id={props.id}>
            <h1 className={"sectionTitle"}>
                Contacts
            </h1>
        </section>
    );
};

export default ContactsPage;
