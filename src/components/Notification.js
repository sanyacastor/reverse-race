import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100%;
  owerflow: hidden;
  display: flex;
  justify-content: center;
  background: var(--sucess-color);
  padding-bottom: 8px;
  padding-top: 8px;
`;

const Message = styled.div`
  max-width: 70%;
  color: white;
  font-size: var(--font-size-s);
  line-height: 100%;
  // background: black;
  text-transform: uppercase;
`;

export default function Notification({ msg }) {
  return (
    <Container>
      <Message><strong>{msg}.</strong><br/>Проверьте номер телефона</Message>
    </Container>
  );
}
