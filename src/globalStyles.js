import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

line-height: 146%;

:root {
  --main-color: #000000;
  --secondary-color: #ffffff;
  --error-color: #ff0000;
  --sucess-color: #bc9b16;
  --font-size-s: 11px;
  --font-size-m: 35px;
  --font-size-xl: 201.5px;
  --font-size-rg: 35px;
}

::selection {
  background: var(--sucess-color);
}

@media (min-width: 1024px) {
  :root {
    --font-size-s: 19px;
    --font-size-m: 96px;
    --font-size-xl: 550px;
    --font-size-rg: 158px;
  }
}
`;

export default GlobalStyle
