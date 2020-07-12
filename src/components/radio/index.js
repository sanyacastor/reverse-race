import React from "react";
import s from "./radio.module.css";
import { useField } from "formik";

const Radio = (props) => {
  const [field, meta] = useField(props);

  const { name, title, value } = props;

  return (
    // <div className={s.row}>
    <>
      <input
        className={s.row__input}
        type="radio"
        id={`${name+value}`}
        name={name}
        {...field}
        value={value}
      />
      <label className={s.row__label} htmlFor={`${name+value}`}>
        {title}
      </label>
      </>
    // </div>
  );
};

export default Radio;
