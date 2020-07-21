import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const CloseButton = styled(Link)`
  position: absolute;
  z-index: 1;
  padding: 0;
  right: 41px;
  top: 42px;
  width: 70px;
  height: 70px;
  /* z-index: 1; */
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;

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

  @media (min-width: 1024px) {
  }
`;

const CrossButton = ({to}) => {
  return <CloseButton to={to || '/'}></CloseButton>;
};

export default CrossButton;
