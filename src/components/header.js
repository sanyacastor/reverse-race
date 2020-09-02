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

    &:nth-child(2) {
      margin-left: auto;
      margin-right: 2.3em;
    }

    &:hover,
    &:focus {
      color: var(--secondary-color);
      -webkit-text-stroke: 0.8px black;
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
      <Link>Reverse side of the road 21 – 23.08.2020</Link>
      <Link className='faq' to='#faq'>
        Faq
      </Link>
      <Link className='camp' to='/camp'>
        Маршрут 2020
      </Link>
      <Link className='results' to='/results'>
        Результаты 2020
      </Link>
    </NavBar>
  </header>
);

export default Header;
