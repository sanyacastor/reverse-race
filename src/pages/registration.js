import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { navigate, Link } from "gatsby";
import * as yup from "yup";

import Layout from "../components/layout";
import CrossButton from "../components/crossButton";
import Input from "../components/input";
import Radio from "../components/radio";
import CheckBox from "../components/checkbox";
import Button from "../components/button";
import Row from "../components/row";
import RowLabel from "../components/rowLabel";
import SEO from "../components/seo";

import { addHeat } from "../servicies/regPlace";
import TermsOfUse from "../components/TermsOfUse.js";

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
    .required("Введите корректный номер телефона")
    .matches(phoneRegExp, "Формат номрера +7 777 777 77 77"),
  category: yup.string().required(),
  distance: yup.string().required(),
  gen: yup.string().required(),
  check: yup.bool().oneOf([true]),
  terms: yup.bool().oneOf([true]),
});

const formSubmitHandler = async (user) => {
  try {
    let url = await addHeat(user);
    console.log(url);
    navigate(url);
  } catch (error) {
    console.log(error);
  }
};

const renderForm = (setVisible) => (
  <Formik
    initialValues={{
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      gen: "",
      category: "multi",
      distance: "",
      terms: false,
      check: false,
    }}
    validationSchema={validationSchema}
    validateOnMount={true}
    onSubmit={(user) => formSubmitHandler(user)}
  >
    {(values) => (
      <Form>
        <Field
          value={values.firstName}
          as={Input}
          type="input"
          name="firstName"
          title="имя"
          faded
        />
        <Field
          value={values.lastName}
          as={Input}
          name="lastName"
          title="фамилия"
          faded
        />

        <Field
          value={values.email}
          as={Input}
          name="email"
          title="e-mail"
          faded={true}
        />
        <Field
          value={values.phone}
          as={Input}
          name="phone"
          title="телефон"
          faded={true}
        />

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
          faded={false}
        >
          <RowLabel>Дистанция</RowLabel>
          <Field
            as={Radio}
            name="distance"
            type="radio"
            value="short"
            title="73 КМ"
          />
          <Field
            as={Radio}
            name="distance"
            type="radio"
            value="long"
            title="145 КМ"
          />
        </Row>

        {values.values.distance === "long" && (
          <Row
            error={!!values.errors.category}
            touched={!!values.touched.category}
            onClick={() => (values.touched.category = true)}
            faded={false}
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
        )}

        <Field
          as={CheckBox}
          title="мне есть 18 лет, мама знает где я, и"
          label="я согласен/на на обработку персональных данных"
          name="check"
          type="checkbox"
          action={setVisible}
        />

        <Field
          as={CheckBox}
          title="условия"
          label="я ознакомлен/а с условиями участия"
          name="terms"
          type="checkbox"
          action={setVisible}
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

const RegistrationPage = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  }

  const closeModal = () => {
    setVisible(false);
  }

  return (
    <Layout>
      <SEO title="Регистрация на гонку" />
      <CrossButton action={()=>navigate('/')} />
      {renderForm(showModal)}
      <Link to="/#faq" style={{ textDecoration: "none" }}>
        <Button caption="FAQ" invert={true} />
      </Link>
      {visible && <TermsOfUse close={closeModal} />}
    </Layout>
  );
};

export default RegistrationPage;
