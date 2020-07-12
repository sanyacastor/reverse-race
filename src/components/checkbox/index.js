import React from "react";
import s from "./checkbox.module.css";

import { useField } from "formik";

const CheckBox = (props) => { 
  const [field, meta] = useField(props);
  const { title, name, label,required } = props

  return (
    <div className={s.row}>
      <span className={s.row__title}>{title}</span>

      <input
        required={required}
        className={s.row__input}
        type="checkbox"
        id={name}
        {...props}
      />

      <label className={s.row__label} htmlFor={name} >
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
