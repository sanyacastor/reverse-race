import React from "react";
import styled from "styled-components";

const Row = styled.div`
  background: var(--main-color);
  padding-left: 12px;
  padding-top: 5px;
  border-bottom: 1.6px solid var(--secondary-color);
  padding-bottom: 2px;

  @media (min-width: 1024px) {
    padding-left: 41px;
    padding-top: 12px;
  }
`;

const Title = styled.span`
  font-weight: 900;
  font-size: var(--font-size-s);
  color: var(--secondary-color);
  display: block;
  text-transform: uppercase;
  line-height: 100%;
`;

const Label = styled.label`
  display: inline-block;
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  font-size: var(--font-size-m);
  text-transform: uppercase;
  line-height: 113%;
  color: var(--main-color);
  text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,
    1px 1px 0 #fff;
`;

const Box = styled.input`
  display: none;
  &:checked + ${Label} {
    color: var(--secondary-color);
    text-shadow: none;
  }
`;

const CheckBox = (props) => {
  // const [meta, field] = useField(props);
  const { title, name, label, required } = props;

  return (
    <Row>
      <Title>{title}</Title>
      <Box required={required} type="checkbox" id={name} {...props} />
      <Label htmlFor={name}>{label}</Label>
    </Row>
  );
};

export default CheckBox;
