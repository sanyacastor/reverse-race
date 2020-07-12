import React from "react";
import { useField } from "formik";
import cx from "classnames";

import s from "./input.module.css";

const Input = (props) => {
  const [field, meta] = useField(props);

  const errorText = meta.error && meta.touched ? meta.error : "";

  return (
    <div className={cx(s.row, errorText ? s.row_error : s.row_sucess)}>
      <input
        className={s.row__input}
        placeholder={props.placeholder}
        name={props.name}
        type="text"
        id={props.name}
        {...props}
      />

      <label
        htmlFor={props.name}
        className={cx(meta.value ? [s.row__label, s.filled] : s.row__label)}
      >
        {!errorText ? props.title : errorText}
      </label>
    </div>
  );
};

export default Input;
