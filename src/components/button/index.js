import React from "react";
import styled from "styled-components";

const Row = styled.div`
  display: block;
  background: ${(props) =>
    props.invert ? "var(--main-color)" : "var(--secondary-color)"};
  padding-left: 12px;
  padding-top: 0;
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
  top: 3px;
  left: 15px;
  border: none;
  line-height: 1;
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

  background: rgba(255, 255, 255, 0);
  border: none;
  outline: none;
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  font-size: var(--font-size-xl);
  line-height: 0.9;
  cursor: pointer;
  white-space: nowrap;
  z-index: 1;
  opacity: 1;
  padding: 0;
  margin: 0;
  text-transform: uppercase;

  &:disabled {
    -webkit-text-stroke: 4.5px var(--main-color);
    -webkit-text-fill-color: "white";
    opacity: 0.2;
  }

  &:enabled {
    color: ${(props) => (props.invert ? "white" : "black")};
    padding-bottom: ${(props) => `${props.p}em`};
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

  @media (max-width: 1024px) {
    font-size: 156px;
    line-height: 100%;
    -webkit-text-stroke: ${(props) =>
      props.invert
        ? "1.6px var(--secondary-color)"
        : "1.6px var(--main-color)"};

    &:disabled,
    &:enabled {
      -webkit-text-stroke: ${(props) =>
        props.invert
          ? "1.6px var(--secondary-color)"
          : "1.6px var(--main-color)"};
    }
  }
`;

export default function Button({ type, title, caption, disabled, invert, p, style}) {
  return (
    <Row invert={invert}>
      {title && <Label>{title}</Label>}
      <OkButton type={type} disabled={disabled} invert={invert} p={p} lh={0.9} style={style}>
        {caption}
      </OkButton>
    </Row>
  );
}
