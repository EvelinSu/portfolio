import SendMessageIcon from "@/assets/icons/SendMessageIcon.tsx";
import Button from "@/components/Button/Button.tsx";
import Form from "@/components/Form/Input/Input.tsx";
import s from "@/components/Form/styles.module.sass";
import Textarea from "@/components/Form/Textarea/Textarea.tsx";
import { useEmailForm } from "../hooks/useEmailForm.ts";

export const SendEmailForm = () => {
  const { handleSubmit, isValid, form, isLoading } = useEmailForm();

  return (
    <form
      onSubmit={handleSubmit}
      className={s.form__container}
    >
      <div className={s.form__row}>
        <div className={s.form__column}>
          <Form
            error={form.touched.name ? form.errors.name : ""}
            placeholder={"Имя"}
            type={"name"}
            name="name"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.name}
            title={form.errors.name}
            required
          />
        </div>
        <div className={s.form__column}>
          <Form
            placeholder={"Почта"}
            type={"email"}
            error={form.touched.email ? form.errors.email : ""}
            name="email"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.email}
            title={form.errors.email}
            required
          />
        </div>
      </div>
      <div className={"form__row"}>
        <Textarea
          placeholder={"Сообщение"}
          error={form.touched.message ? form.errors.message : ""}
          name="message"
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          value={form.values.message}
          title={form.errors.message}
          required
        />
      </div>
      <div className={s.form__center}>
        <Button
          type={"submit"}
          className={`${s.button} ${isLoading && s.buttonLoading}`}
          label={"Отправить"}
          disabled={!isValid}
          icon={<SendMessageIcon />}
        />
      </div>
    </form>
  );
};
