import React from "react";
import { useField } from "formik";

import styled from "styled-components";
import Row from '../row'

const FormLabel = styled.label`
  overflow: hidden;
  position: absolute;
  line-height: 100%;
  left: 16px;
  font-size: var(--font-size-m);
  pointer-events: none;
  transition: 0.2s ease-in-out;
  cursor: text;
  white-space: nowrap;

  top: ${(props) =>
          props.touched ? "8px" : "20px"};

  font-size: ${(props) =>
    props.touched ? "var(--font-size-s)" : "var(--font-size-m)"};

  @media (min-width: 1024px) {
    top: ${(props) =>
    props.touched ? "8px" : "40px"};
    left: 41px;
  }
`;

const FormInput = styled.input`
  background: transparent;
  border: none;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 0;
  color: var(--secondary-color);
  line-height: 113%;
  outline: none;
  text-transform: uppercase;
  caret-color: var(--sucess-color);
  

  &:focus ~ ${FormLabel} {
    position: absolute;
    font-size: var(--font-size-s);
    top: 8px;
  }

  &:invalid {
    outline: none;
    box-shadow: none;
  }

  @media (min-width: 1024px) {
    padding-top: 18px;
    left: 41px;
  }

`;

const Input = (props) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";

  return (
    <Row error={errorText} touched={meta.touched}>
      <FormInput
        placeholder={props.placeholder}
        name={props.name}
        type="text"
        id={props.name}
        {...field}
      />

      <FormLabel
        htmlFor={props.name}
        filled={meta.value}
        touched={meta.touched}
      >
        {!errorText ? props.title : errorText}
      </FormLabel>
    </Row>
  );
};

export default Input;
