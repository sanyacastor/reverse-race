import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const NavBar = styled.nav`
  position: absolute;
  display: flex;
  width: 100%;
  padding-top: 21px;
  padding-left: 41px;
  padding-right: 41px;

  & a {
    font-family: "Montserrat", sans-serif;
    font-weight: 900;
    font-size: 19px;
    line-height: 23px;
    color: var(--sucess-color);
    text-transform: uppercase;
    text-decoration: none;

    &:nth-child(2) {
      margin-left: auto;
      margin-right: 2.3em;
    }

    &:hover,
    &:focus {
      color: var(--secondary-color);
      -webkit-text-stroke: 0.8px black;
    }
  }

  @media (max-width: 780px) {
    padding-left: 14px;
    padding-right: 14px;
    & a {
      font-size: 10px;
    }
  }
`;

const Header = () => (
  <header>
    <NavBar>
      <Link to='/'>Reverse side of the road</Link>
      <Link to='#faq'>Faq</Link>
      <Link to='/registration'>Регистрация</Link>
    </NavBar>
  </header>
);

export default Header;
