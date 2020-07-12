import React from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";

import Layout from "../components/layout";
import Input from "../components/input";
import Radio from "../components/radio";
import CheckBox from "../components/checkbox";
import Button from "../components/button";
import SEO from "../components/seo";

import s from "../components/radio/radio.module.css";
import { check } from "prettier";

const phoneRegExp = /^((\+7|7|8)+([0-9]){10})$/

const validationSchema = yup.object({
  firstName: yup.string().required("Ведите имя").min(3),
  lastName: yup.string().required("Введите фамилию").min(3),
  email: yup
    .string()
    .required("Почта обязательна")
    .email("Введите корректный e-mail"),
  phone: yup
  .string()
  .required("Это обязательное поле")
  .matches(phoneRegExp, 'Формат номрера +7 777 777 77 77'),
  check: yup.bool().oneOf([true])
    
});

const RegistrationPage = () => (
  <Layout>
    <SEO title="Регистрация на гонку" />
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        gen: "",
        check: false
      }}
      validationSchema={validationSchema}
      onSubmit={(data) => console.log(data)}
    >
      {(values) => (
        <Form>
          <Field
            value={values.firstName}
            as={Input}
            type="input"
            name="firstName"
            title="имя"
          />
          <Field
            value={values.lastName}
            as={Input}
            name="lastName"
            title="фамилия"
          />
          <Field value={values.email} as={Input} name="email" title="e-mail" />
          <Field value={values.phone} as={Input} name="phone" title="телефон" />

          <fieldset className={s.row}>
          <span className={s.row__title}>Пол</span>
            <Field
              as={Radio}
              name="gen"
              type="radio"
              value="male"
              title={"Мужской"}
            />
            <Field
              as={Radio}
              name="gen"
              type="radio"
              value="female"
              title={"Женский"}
            />
          </fieldset>
          <fieldset className={s.row}>
          <span className={s.row__title}>Дистанция</span>
            <Field
              as={Radio}
              name="distance"
              type="radio"
              value="long"
              title={"Короткая"}
            />
            <Field
              as={Radio}
              name="distance"
              type="radio"
              value="short"
              title={"Длинная"}
            />
          </fieldset>
          <fieldset className={s.row}>
            <span className={s.row__title}>Категория</span>
            <Field
              as={Radio}
              name="category"
              type="radio"
              value="multi"
              title={"Мультиспид"}
            />
            <Field
              as={Radio}
              name="category"
              type="radio"
              value="single"
              title={"Сингл"}
            />
            <Field
              as={Radio}
              name="category"
              type="radio"
              value="fix"
              title={"Фикс"}
            />
          </fieldset>

          <Field
              required={true}
              as={CheckBox}
              title="мне есть 18 лет, мама знает где я"
              label="Я согласен/а на обработку персональных данных"
              name="check"
              type="checkbox"
            />
       
          <Button type="submit" title="перейти к оплате" caption="ОК"/>
      <pre>{JSON.stringify(values, null, 2)}</pre>
        </Form>
        
      )}
    </Formik>
  </Layout>
);

export default RegistrationPage;
