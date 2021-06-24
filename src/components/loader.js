import React from "react";
import styled from "styled-components";

const Spinner = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  display: flex;
  background: #000;
  z-index: 99;
  align-items: center;
  justify-content: center;

  .lds-dual-ring {
    display: inline-block;
    width: 80px;
    height: 80px;
  }
  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default function Loader() {
  return (
    <Spinner>
      <div className="lds-dual-ring"></div>
    </Spinner>
  );
}
