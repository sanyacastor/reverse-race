import React from "react";
import styled from "styled-components";

const Row = styled.div`
  background: var(--secondary-color);
  padding-left: 12px;
  padding-top: 5px;
  padding-bottom: 2px;
  margin-bottom: 0;
  border-top: none;
  border-left: none;
  border-right: none;
  position: relative;
  overflow: hidden;

  @media (min-width: 1024px) {
    display:flex;
    justify-content: center;
    align-items: center;
  }

`;

const Label = styled.span`
  position: absolute;
  top: 12px;
  left: 15px;
  border: none;
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  color: var(--main-color);
  font-size: var(--font-size-s);
  pointer-events: none;
  transition: 0.2s ease-in-out;
  cursor: text;
  white-space: nowrap;
  text-transform: uppercase;

  @media (min-width: 1024px) {
    top: 0;
    left: 41px;
    padding-top: 12px;
  }
`;

const OkButton = styled.button`
  display: block;
  -webkit-text-stroke: 1px var(--main-color);
  -webkit-text-fill-color: white;
  color: var(--secondary-color);
  background: var(--secondary-color);
  border: none;
  outline: none;
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  font-size: var(--font-size-xl);
  min-height: 214px;
  line-height: 100%;
  cursor: pointer;

  &:disabled {
  -webkit-text-stroke: 1px var(--main-color);
  -webkit-text-fill-color: white;
  opacity: 0.1;
  }

  &:enabled &:active {
    color: var(--main-color);
    -webkit-text-stroke: none;
    -webkit-text-fill-color: var(--main-color);
  }
`;

export default function Button({ type, title, caption, disabled }) {
  return (
    <Row>
      <Label>{title}</Label>
      <OkButton type={type} disabled={disabled}>{caption}</OkButton>
    </Row>
  );
}
