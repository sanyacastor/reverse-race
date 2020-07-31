import React from "react";
import Loadable from "@loadable/component";
import Letters from "./Letters.js";

const P5Wrapper = Loadable(() => import("react-p5-wrapper"));

const P5 = (props) => {
  return <P5Wrapper sketch={Letters} />;
};

export default P5;
