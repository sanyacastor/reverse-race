import React from "react";
import styled from "styled-components";

const RadioLabel = styled.label`
  display: inline-block;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  font-size: var(--font-size-m);
  text-transform: uppercase;
  line-height: 100%;
  color: var(--main-color);
  transition: all 0.3s ease;
  text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,
    1px 1px 0 #fff;

  &:nth-child(3) {
    display: block;
    margin-left: 0;
  }

  &:nth-child(7) {
    margin-left: 27px;
  }

  @media (min-width: 1024px) {
    &:nth-child(3) {
      display: inline-block;
      margin-right: 74px;
    }

    &:nth-child(7) {
      max-width: 380px;
      display: block;
      margin-left: 0;
    }
  }

  @media (min-width: 1657px) {
    &:nth-child(7) {
      max-width: auto;
      display: inline-block;
      margin-left: 74px;
    }
  }

`;

const RadioInput = styled.input`
  display: none;

  &:checked + ${RadioLabel} {
    color: var(--secondary-color);
    text-shadow: none;
  }
`;

const Radio = (props) => {
  const { name, title, value, checked} = props;

  return (
    <>
      <RadioInput
        type="radio"
        id={`${name}_${value}_input`}
        name={name}
        {...props}
        value={value}
        checked={checked}
      />
      <RadioLabel
        htmlFor={`${name}_${value}_input`}
        id={`${name}_${value}_label`}
      >
        {title}
      </RadioLabel>
    </>
  );
};

export default Radio;
