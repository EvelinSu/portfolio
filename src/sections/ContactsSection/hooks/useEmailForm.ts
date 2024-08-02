import { index } from "@/sections/ContactsSection/schemas";
import { SendEmailRequest } from "@/sections/ContactsSection/types";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import { useState } from "react";

const emailServiceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
const emailTemplateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
const emailPublicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

const initialValues = {
  name: "",
  email: "",
  message: "",
};

export const useEmailForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = async (values: SendEmailRequest) => {
    try {
      setIsLoading(true);
      await sendEmail(values);
      resetForm();
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const { handleSubmit, isValid, resetForm, ...form } = useFormik<SendEmailRequest>({
    initialValues,
    validationSchema: index,
    onSubmit,
  });

  const sendEmail = async (values: SendEmailRequest) => {
    return await emailjs.send(emailServiceId, emailTemplateId, values, {
      publicKey: emailPublicKey,
    });
  };

  return { handleSubmit, form, isValid, isLoading };
};
