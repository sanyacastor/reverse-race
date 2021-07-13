import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import BurgerMenu from "../components/burgerMenu";

const NavBar = styled.nav`
  position: absolute;
  display: flex;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 41px;
  padding-right: 41px;
  background: #000;

  & .results {
    display: none;
  }

  & a {
    font-family: "Montserrat", sans-serif;
    font-weight: 900;
    font-size: 19px;
    line-height: 23px;
    color: var(--sucess-color);
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;

    &:nth-child(2) {
      margin-left: 6.5em;
      margin-right: 6.5em;
    }

    &:hover,
    &:focus {
      color: var(--secondary-color);
    }

    transition: all 0.2s ease-in-out;
  }

  @media (max-width: 780px) {
    padding-left: 14px;
    padding-right: 14px;
    & a {
      font-size: 10px;
    }

    & .faq,
    & .camp {
      display: none;
    }

    & .results {
      display: block;
      margin-left: auto;
    }
  }
`;

const Header = () => (
  <header>
    <NavBar>
      <Link to="/">Reverse side of the road 16 - 18.07.2021</Link>
      {/* <Link className='faq' to='#faq'>
        Faq
      </Link> */}
      {/* <Link className='shop' to='/shop'>
        Магазин
      </Link> */}
      <Link className="registration" to="/camp">
        лагерь’21
      </Link>
      <BurgerMenu />
    </NavBar>
  </header>
);

export default Header;
