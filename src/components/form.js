import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { motion, AnimatePresence } from "framer-motion";
import * as yup from "yup";
import { navigate } from "gatsby";

import Input from "./input";
import Radio from "./radio";
import CheckBox from "./checkbox";
import Button from "./button";
import Row from "./row";
import RowLabel from "./rowLabel";
import Notification from "./Notification";

import { addHeat } from "../servicies/regPlace";

const phoneRegExp = /^((\+7|7|8)+([0-9]){10})$/;

const validationSchema = yup.object({
  firstName: yup
    .string()
    .required("Ведите имя")
    .min(2, "Введите корректное имя"),
  lastName: yup
    .string()
    .required("Введите фамилию")
    .min(2, "Введите корректную фамилию"),
  email: yup
    .string()
    .trim()
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

const renderForm = (setVisible, formSubmitHandler) => (
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
          type='input'
          name='firstName'
          title='имя'
          faded
        />
        <Field
          value={values.lastName}
          as={Input}
          name='lastName'
          title='фамилия'
          faded
        />

        <Field
          value={values.email}
          as={Input}
          name='email'
          title='e-mail'
          faded={true}
        />
        <Field
          value={values.phone}
          as={Input}
          name='phone'
          title='телефон'
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
            name='gen'
            type='radio'
            value='male'
            title='Мужской'
          />
          <Field
            as={Radio}
            name='gen'
            type='radio'
            value='female'
            title='Женский'
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
            name='distance'
            type='radio'
            value='short'
            title='73 КМ'
          />
          <Field
            as={Radio}
            name='distance'
            type='radio'
            value='long'
            title='145 КМ'
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
              name='category'
              type='radio'
              value='multi'
              title='Мультиспид'
            />
            <Field
              as={Radio}
              name='category'
              type='radio'
              value='fix'
              title='Фикс'
            />
            <Field
              as={Radio}
              name='category'
              type='radio'
              value='single'
              title='Сингл'
            />
          </Row>
        )}

        <Field
          as={CheckBox}
          title='мне есть 18 лет, мама знает где я, и'
          label='я согласен/на на обработку персональных данных'
          name='check'
          type='checkbox'
          action={setVisible}
        />

        <Field
          as={CheckBox}
          title='условия'
          label='я ознакомлен/а с условиями участия'
          name='terms'
          type='checkbox'
          action={setVisible}
        />

        <Button
          type='submit'
          title='перейти к оплате'
          caption='ОК'
          disabled={!values.isValid}
        />
      </Form>
    )}
  </Formik>
);

export default function RegistrationForm({ setVisible }) {
  const [error, setError] = useState(null);

  const formSubmitHandler = async (user) => {
    try {
      let url = await addHeat(user);
      navigate(url);
    } catch (error) {
      setError(error.message);

      setTimeout(() => {
        setError(null);
      }, 2000);
    }
  };

  return (
    <>
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.2 }}
          >
            <Notification msg={error} />}
          </motion.div>
        )}
      </AnimatePresence>
      {renderForm(setVisible, formSubmitHandler)}
    </>
  );
}
