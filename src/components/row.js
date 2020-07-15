import styled from "styled-components";

const Row = styled.div`
  position: relative;
  background: var(--main-color);
  text-transform: uppercase;
  min-height: 52px;
  color: white;
  width: 100%;
  display: block;
  font-family: "Montserrat" sans-serif;
  font-weight: 900;
  font-size: var(--font-size-m);
  line-height: 113%;
  border-bottom: ${({ error, touched }) => {
    if (!touched) {
      return `1.6px solid var(--secondary-color)`;
    }

    if (!!error && touched) {
      return `1.6px solid var(--error-color)`;
    }

    if (!error && touched) {
      return `1.6px solid var(--sucess-color)`;
    }
  }};

  padding-left: 12px;
  padding-top: 5px;

  @media (min-width: 1024px) {
    padding-left: 41px;
    padding-top: 12px;
    padding-bottom: 0;
    border-width: 4.5px;
  }
`;

export default Row;
