import React from "react";
import Loadable from "@loadable/component";
import Letters from "./Letters.js";
import styled from "styled-components";

const Container = styled.div`
  min-height: "600px";
`;

const P5Wrapper = Loadable(() => import("react-p5-wrapper"));

const P5 = (props) => {
  return  <Container><P5Wrapper sketch={Letters} /></Container>
};

export default P5;
