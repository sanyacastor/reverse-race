import React from "react";
import GlobalStyle from "../globalStyles";

import "./layout.css";
// import "../css/colors.css";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <main style={{ overflow: "hidden" }}>{children}</main>
    </>
  );
};

export default Layout;
