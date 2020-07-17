import React from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";

import Layout from "../components/layout";
import Input from "../components/input";
import Radio from "../components/radio";
import CheckBox from "../components/checkbox";
import Button from "../components/button";
import Row from "../components/row";
import RowLabel from "../components/rowLabel";
import SEO from "../components/seo";

const phoneRegExp = /^((\+7|7|8)+([0-9]){10})$/;

const validationSchema = yup.object({
  firstName: yup.string().required("Ведите имя").min(3),
  lastName: yup.string().required("Введите фамилию").min(3),
  email: yup
    .string()
    .required("Почта обязательна")
    .email("Введите корректный e-mail"),
  phone: yup
    .string()
    .transform((value, originalValue) => originalValue.replace(/\s/g, ""))
    .required("Это обязательное поле")
    .matches(phoneRegExp, "Формат номрера +7 777 777 77 77"),
  check: yup.bool().oneOf([true]),
  category: yup.string().required(),
  distance: yup.string().required(),
  gen: yup.string().required(),
});

const renderForm = () => (
  <Formik
    initialValues={{
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      gen: "",
      category: "",
      distance: "",
      check: false,
    }}
    validationSchema={validationSchema}
    validateOnMount={true}
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

        <Row
          error={values.errors.gen}
          touched={values.touched.gen}
          onClick={() => (values.touched.gen = true)}
        >
          <RowLabel>Пол</RowLabel>
          <Field
            as={Radio}
            name="gen"
            type="radio"
            value="male"
            title="Мужской"
          />
          <Field
            as={Radio}
            name="gen"
            type="radio"
            value="female"
            title="Женский"
          />
        </Row>

        <Row
          error={values.errors.distance}
          touched={values.touched.distance}
          onClick={() => (values.touched.distance = true)}
        >
          <RowLabel>Дистанция</RowLabel>
          <Field
            as={Radio}
            name="distance"
            type="radio"
            value="long"
            title="Короткая"
          />
          <Field
            as={Radio}
            name="distance"
            type="radio"
            value="short"
            title="Длинная"
          />
        </Row>

        <Row
          error={!!values.errors.category}
          touched={!!values.touched.category}
          onClick={() => (values.touched.category = true)}
        >
          <RowLabel>Категория</RowLabel>
          <Field
            as={Radio}
            name="category"
            type="radio"
            value="multi"
            title="Мультиспид"
          />
          <Field
            as={Radio}
            name="category"
            type="radio"
            value="fix"
            title="Фикс"
          />
          <Field
            as={Radio}
            name="category"
            type="radio"
            value="single"
            title="Сингл"
          />
        </Row>

        <Field
          as={CheckBox}
          title="мне есть 18 лет, мама знает где я"
          label="Я согласен/а на обработку персональных данных"
          name="check"
          type="checkbox"
        />

        <Button
          type="submit"
          title="перейти к оплате"
          caption="ОК"
          disabled={!values.isValid}
        />
      </Form>
    )}
  </Formik>
);

const RegistrationPage = () => (
  <Layout>
    <SEO title="Регистрация на гонку" />
    {renderForm()}
  </Layout>
);

export default RegistrationPage;
