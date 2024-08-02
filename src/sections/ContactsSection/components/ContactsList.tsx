import EmailIcon from "@/assets/icons/EmailIcon.tsx";
import LocationIcon from "@/assets/icons/LocationIcon.tsx";
import PhoneIcon from "@/assets/icons/PhoneIcon.tsx";
import { Fade } from "react-awesome-reveal";
import s from "../styles.module.sass";

export const ContactsList = () => {
  return (
    <div className={s.contacts}>
      <Fade
        triggerOnce={true}
        cascade={true}
        duration={1000}
      >
        <a
          href={"tel:+79951232188"}
          className={s.item}
        >
          <PhoneIcon />
          <div>+7(995)123-21-88</div>
        </a>
        <a
          href={"mailto:eveelinsu@gmail.com"}
          className={s.item}
        >
          <EmailIcon />
          <div>eveelinsu@gmail.com</div>
        </a>
        <div className={s.item}>
          <LocationIcon />
          <div>Сочи, Россия</div>
        </div>
      </Fade>
    </div>
  );
};
