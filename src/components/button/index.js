import React from "react";
import styled from "styled-components";

const Row = styled.div`
  display: block;
  background: ${(props) =>
    props.invert ? "var(--main-color)" : "var(--secondary-color)"};
  padding-left: 12px;
  padding-top: 5px;
  padding-bottom: 2px;
  margin-bottom: 0;
  border-top: none;
  border-left: none;
  border-right: none;
  position: relative;
  overflow: hidden;
  max-width: 100%;
`;

const Label = styled.span`
  z-index: 5;
  position: absolute;
  display: block;
  top: 0;
  left: 15px;
  border: none;
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  color: var(--main-color);
  font-size: var(--font-size-s);
  pointer-events: none;
  cursor: text;
  white-space: nowrap;
  text-transform: uppercase;

  @media (min-width: 1024px) {
    position: absolute;
    top: 0;
    left: 41px;
    padding-top: 12px;
  }
`;

const OkButton = styled.button`
  display: block;

  -webkit-text-stroke: ${(props) =>
    props.invert ? "4.5px var(--secondary-color)" : "4.5px var(--main-color)"};

  -webkit-text-fill-color: ${(props) => (props.invert ? "black" : "white")};

  color: ${(props) =>
    props.invert ? "var(--main-color)" : "var(--secondary-color)"};

  background: transparent;
  border: none;
  outline: none;
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  font-size: var(--font-size-xl);
  min-height: 214px;
  line-height: 100%;
  cursor: pointer;
  white-space: nowrap;
  z-index: 1;
  opacity: 1;
  padding: 0;
  margin: 0;

  &:disabled {
    -webkit-text-stroke: 4.5px var(--main-color);
    -webkit-text-fill-color: "white";
    opacity: 0.2;
  }

  &:enabled {
    color: ${(props) => (props.invert ? "white" : "black")};

    -webkit-text-stroke: ${(props) =>
      props.invert
        ? "4.5px var(--secondary-color)"
        : "4.5px var(--main-color)"};

    -webkit-text-fill-color: ${(props) => (props.invert ? "black" : "white")};
    opacity: 1;
  }

  &:active {
    -webkit-text-fill-color: ${(props) => (props.invert ? "white" : "black")};
  }
`;

export default function Button({ type, title, caption, disabled, invert }) {
  return (
    <Row invert={invert}>
      {title && <Label>{title}</Label>}
      <OkButton type={type} disabled={disabled} invert={invert}>
        {caption}
      </OkButton>
    </Row>
  );
}
