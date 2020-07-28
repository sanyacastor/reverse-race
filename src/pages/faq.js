import React from "react";
import Sketch from "react-p5";
import { Link } from "gatsby";
import Header from "../components/header.js";
import styled from "styled-components";

import letterE from "../images/e-01.svg";
import letterR from "../images/letterR.svg";
import letterS from "../images/s-01.svg";
import letterV from "../images/v-01.svg";

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

export default (props) => {
  let letters = [];
  let l = 0;

  const preload = (p5) => {
    const imgR = p5.loadImage(letterR);
    const imgE = p5.loadImage(letterE);
    const imgV = p5.loadImage(letterV);
    const imgS = p5.loadImage(letterS);

    letters = [imgR, imgE, imgV, imgE, imgR, imgS, imgE];
  };

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, 691).parent(canvasParentRef);
    p5.background(0);
  };

  const mousePressed = (p5) => {
    if (l < 6) {
      l += 1;
    } else {
      l = 0;
    }
  };

  const windowResized = (p5) => {
    p5.resizeCanvas(p5.windowWidth, 691);
  };

  const draw = (p5) => {
    p5.imageMode(p5.CENTER);
    p5.image(letters[l], p5.mouseX, p5.mouseY);
  };

  return (
    <>
      <Hero>
        <Header />
        <Sketch
          setup={setup}
          draw={draw}
          mousePressed={mousePressed}
          preload={preload}
          windowResized={windowResized}
        />
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
