import React from 'react';
import Form from "../../components/Form/Input/Input";
import Textarea from "../../components/Form/Textarea/Textarea";
import s from "../../components/Form/styles.module.sass";
import Button from "../../components/Button/Button";
import * as Yup from 'yup';
import {useFormik} from "formik";

const SendEmail = () => {

    type LoginRequest = {
        name: string;
        email: string;
        message: string;
    }

    const {
        handleBlur,
        handleSubmit,
        touched,
        handleChange,
        isValid,
        values,
        errors,
    } = useFormik<LoginRequest>({
        initialValues: {
            name: "",
            email: "",
            message: ""
        },
        validationSchema: Yup.object({
            name: Yup.string().trim().required('Required').min(1, 'must be more than 1').max(30, 'must be less than' +
                ' 30'),
            email: Yup.string().trim().email('Invalid email address').required('Required'),
            message: Yup.string().trim().required('Required').min(1, 'must be more than 1').max(500, 'must be less than' +
                ' 500'),
        }),
        onSubmit: ({name, email, message}) => {
            alert(`${name}, ${email}, ${message}`)
        }
    });

    return (
        <form onSubmit={handleSubmit} className={s.form__container}>
            <div className={s.form__row}>
                <div className={s.form__column}>
                    <Form
                        error={touched.name ? errors.name : ""}
                        placeholder={"Name"}
                        type={'name'}
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        required
                    />
                </div>
                <div className={s.form__column}>
                    <Form
                        placeholder={"Email"}
                        type={'email'}
                        error={touched.email ? errors.email : ""}
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        required
                    />
                </div>
            </div>
            <div className={"form__row"}>
                <Textarea
                    placeholder={"Message"}
                    error={touched.message ? errors.message : ""}
                    name="message"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                    required
                />
            </div>
            <div className={s.form__center}>
                <Button
                    type={'submit'}
                    className={s.button}
                    label={"Send message"}
                    disabled={!isValid}
                />
            </div>
        </form>
    );
};

export default SendEmail;
