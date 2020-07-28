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
    font-family: Montserrat, sans-serif;
    font-weight: 900;
    font-size: 19px;
    line-height: 23px;
    color: var(--sucess-color);
    text-transform: uppercase;
    text-decoration: none;

    &:nth-child(2) {
      margin-left: auto;
      margin-right: 45px;
    }
  }
`;


const Header = () => (
  <header>
    <NavBar>
      <Link to="/">Reverse side of the road</Link>
      <Link to="/">Faq</Link>
      <Link to="/registration">Регистрация</Link>
    </NavBar>
  </header>
);

export default Header;
