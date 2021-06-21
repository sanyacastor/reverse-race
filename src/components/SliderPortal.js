import React, { useState } from "react";
import styled from "styled-components";

import Portal from "./portal.js";
import Slider from "./Slider.js";

import CrossButton from "./crossButton";

const Container = styled.section`
  display: "none";
  width: 100%;
  max-height: 100vh;
  background: var(--main-color);
  color: var(--secondary-color);
  padding: 20px 30px;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 19px;
  line-height: 23px;
  color: var(--secondary-color);
  overflow: auto;

  @media (max-width: 780px) {
    /* padding: 54px 18px; */
    padding: 14px;
    /* padding-right: 41px; */
  }
`;

const PortalOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: black;
  top: 0;
  left: 0;
  z-index: 50;
  overflow: hidden;
`;

const ModalWindow = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: auto;
`;

const SliderModal = ({ close, images, slide }) => {
  const [init, setInit] = useState(false);

  return (
    <Portal>
      <PortalOverlay>
        <ModalWindow>
          <Container>
            <CrossButton action={close} />
            <Slider images={images} setInit={setInit} ndx={slide} />
          </Container>
        </ModalWindow>
      </PortalOverlay>
    </Portal>
  );
};

export default SliderModal;
