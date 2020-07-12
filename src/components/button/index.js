import React from "react";
import s from './button.module.css'

export default function Button({ type, title, caption }) {
  return (
    <div className={s.row}>
      <span className={s.row__label}>{title}</span>
      <button className={s.row__button} type={type}>{caption}</button>
    </div>
  );
}
