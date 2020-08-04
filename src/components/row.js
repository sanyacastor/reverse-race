import styled from "styled-components";

const Row = styled.div`
  position: relative;
  background: var(--main-color);
  text-transform: uppercase;
  padding-left: 12px;
  padding-top: 5px;
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

  &:not(:focus-within) {
    ${(props) =>
      props.faded &&
      `&:after {
    content: "";
    display: block;
    width: 160px;
    height: 99.5%;
    position: absolute;
    right: 0;
    top: 0;
    background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      30%,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 1));
      }`}
  }

  @media (min-width: 1024px) {
    min-height: 144px;
    padding-left: 41px;
    padding-top: 12px;
    padding-bottom: 0;
    border-width: 4.5px;
  }
`;

export default Row;
