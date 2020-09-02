import React from "react";
import styled from "styled-components";
// import { Link } from "gatsby";

const CloseButton = styled.div`
  position: absolute;
  z-index: 1;
  padding: 0;
  right: 41px;
  top: 42px;
  width: 70px;
  height: 70px;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.1s ease-in;

  &:before,
  &:after {
    position: absolute;
    right: 32px;
    top: -12px;
    content: " ";
    height: 95px;
    width: 4.5px;
    background-color: var(--secondary-color);
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }

  &:hover {
    &:after,
    &:before {
      background-color: var(--sucess-color);
    }
  }

  @media (max-width: 1024px) {
    width: 25px;
    height: 25px;
    right: 14px;
    top: 13px;

    &:before,
    &:after {
      position: absolute;
      right: 10px;
      top: -5px;
      content: " ";
      height: 35px;
      width: 1.6px;
      background-color: var(--secondary-color);
    }
  }
`;

const CrossButton = ({ action }) => {
  return <CloseButton onClick={action}></CloseButton>;
};

export default CrossButton;
