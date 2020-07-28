import React from "react";

import { Link } from "gatsby";
import Header from "../components/header.js";
import styled from "styled-components";
import P5 from "../components/p5.js"

import logoVk from "../images/social_vk.svg";
import logoTg from "../images/social_tg.svg";
import logoCity from "../images/logo_CityCycle.svg";
import logoSpec from "../images/logo_specialized.svg";
import logoFb from "../images/social_fb.svg";
import logoInst from "../images/social_inst.svg";

const Hero = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const FaqHeader = styled.nav`
  position: absolute;
  width: 100%;
  padding-top: 21px;
  left: 0;
  top: 0;
  background: transparent;
`;

const SponsorBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 41px;
  padding-top: 21px;
  & .sponsor-logo + .sponsor-logo {
    margin-left: 8px;
  }
`;

const FaqPage = () => {
  return (
    <>
      <Hero>
        <Header />
        <P5/>
      </Hero>
      <SponsorBar>
        <Link>
          <img src={logoSpec} alt="specialized" />
        </Link>
        <div>
        <Link className='sponsor-logo'>
          <img src={logoVk} alt="vkontakte" />
        </Link>
        <Link className='sponsor-logo'>
          <img src={logoInst} alt="instagram" />
        </Link>
        <Link className='sponsor-logo'>
          <img src={logoFb} alt="facebook" />
        </Link>
        <Link className='sponsor-logo'>
          <img src={logoTg} alt="telegtam" />
        </Link>
        </div>
        <Link>
          <img src={logoCity} alt="cityCycle" />
        </Link>
      </SponsorBar>
    </>
  );
};

export default FaqPage
