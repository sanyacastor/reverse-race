import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const MenuWrapper = styled.div`
  margin-left: auto;
  position: relative;
`;

const MenuList = styled.div`
  position: absolute;
  background: #fff;
  padding-left: 41px;
  padding-right: 21px;
  padding-top: 9px;
  padding-bottom: 21px;
  right: 0;
  top: 0;

  & .burger__list {
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: left;
  }

  & .burger__item {
    margin: 0;
    padding: 0;
    margin-bottom: 17px;
  }

  & .burger__link {
    color: #000;
    font-size: var(--font-size-s);
  }

  & .burger__link:hover {
    color: var(--sucess-color);
  }
`;

const BugerButton = styled.button`
  width: 73px;
  height: 46px;
  background-color: #000;
  border: none;
  cursor: pointer;
  background-repeat: none;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 73 46' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0.6' y='0.6' width='71.8' height='4.8' fill='white'/%3E%3Crect x='0.6' y='20.6' width='71.8' height='4.8' fill='white'/%3E%3Crect x='0.6' y='40.6' width='71.8' height='4.8' fill='white'/%3E%3C/svg%3E%0A");

  & .burger__wrapper {
    display: none;
  }
  &:hover {
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 73 46' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0.6' y='0.6' width='71.8' height='4.8' fill='%23BC9B16'/%3E%3Crect x='0.6' y='20.6' width='71.8' height='4.8' fill='%23BC9B16'/%3E%3Crect x='0.6' y='40.6' width='71.8' height='4.8' fill='%23BC9B16'/%3E%3C/svg%3E%0A");
  }

  &:hover .burger__wrapper {
    display: block;
  }

  @media (max-width: 780px) {
    width: 40px;
    height: 25px;
  }
`;

export default function BurgerMenu() {
  return (
    <MenuWrapper>
      <BugerButton>
        <MenuList className="burger__wrapper">
          <ul className="burger__list">
            <li className="burger__item">
              <Link className="burger__link" to="#history">
                История
              </Link>
            </li>
            <li className="burger__item">
              <Link className="burger__link" href="#faq">
                FAQ
              </Link>
            </li>
            {/* <li className="burger__item">
              <Link className="burger__link">
                SIN X
              </Link>
            </li> */}
            <li className="burger__item">
              <Link className="burger__link" href="#founders">
                Контакты
              </Link>
            </li>
          </ul>
        </MenuList>
      </BugerButton>
    </MenuWrapper>
  );
}
