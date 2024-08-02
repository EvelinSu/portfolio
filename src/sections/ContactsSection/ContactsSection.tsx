import { TPageProps } from "@/common/types";
import { Section } from "@/components/Section";
import React from "react";
import { ContactsList } from "./components/ContactsList.tsx";
import { SendEmailForm } from "./components/SendEmailForm.tsx";
import { SocialMedia } from "./components/SocialMedia.tsx";
import s from "./styles.module.sass";

export const ContactsSection: React.FC<TPageProps> = (props) => {
  return (
    <Section
      className={s.content}
      title={"Контакты"}
      id={props.id}
    >
      <div className={s.row}>
        <div className={s.column}>
          <ContactsList />
          <div
            className={s.center}
            style={{ flexDirection: "column" }}
          >
            <h1>Я в соц. сетях</h1>
            <SocialMedia />
          </div>
        </div>
        <div className={s.column}>
          <SendEmailForm />
        </div>
      </div>
    </Section>
  );
};
