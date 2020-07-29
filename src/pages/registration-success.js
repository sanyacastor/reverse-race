import React from "react";
import styled from "styled-components";

import CrossButton from "../components/crossButton";

const Container = styled.section`
  max-width: 100vw;
  min-height: 100vh;
  background: black;
  color: white;
  padding: 54px 41px;
  padding-right: 110px;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: var(--font-size-m);
  line-height: 118%;
  text-transform: uppercase;
`;

const Paragraph = styled.p`
  margin: 0;
  padding: 0;
`;

const Success = () => (
  <Container>
    <CrossButton to='/' />
    <Paragraph>
        Спасибо за регистрацию! Подробная информация на твоей почте.
    </Paragraph>
  </Container>
);

export default Success;
