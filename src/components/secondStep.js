import React from "react";
import styled from "styled-components";

import Radio from "../components/radio";
import Row from "../components/row";
import RowLabel from "../components/rowLabel";

import Layout from "./layout";

const Container = styled.div`
  margin-top: ${(props) => props.mt + "px"};
  color: #fff;
  display: grid;
  grid-template-columns: 14px 1fr 14px;
  transition: all 320ms ease;
  border-top: ${(props) => (props.bordered ? "1.6px solid #fff" : "none")};

  @media (min-width: 780px) {
    grid-template-columns: 40px 1fr 40px 2fr 40px;
    grid-template-rows: 30px max-content 37px;
    border-top: ${(props) => (props.bordered ? "4.5px solid #fff" : "none")};
  }

  & fieldset {
    border: none;
  }
  & fieldset label {
    margin-right: 20px;
  }
`;

const NextButton = styled.button`
  background: #fff;
  width: 100%;
  border: none;
  font-size: var(--font-size-m);
  line-height: 106.4%;
  padding: 15px 0;
  text-align: center;
  font-weight: 900;
  color: #fff;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  text-transform: uppercase;
  cursor: pointer;
`;

const StepForm = styled.form`
  grid-row: 2/3;
  grid-column: 1/6;
  border-top: 4px solid var(--secondary-color);
`;

const SecondStep = ({ nextStepHandler }) => {
  const submitStepHandler = (e) => {
    e.preventDefault();
    nextStepHandler();
  };

  return (
    <Layout>
      <Container mt="75">
        <StepForm onSubmit={submitStepHandler}>
          <Row>
            <RowLabel>Pack</RowLabel>
            <Radio name="pack" type="radio" value="Starter" title="Starter" />
          </Row>
          <Row>
            <RowLabel>Футболка Reverse Race </RowLabel>
            <fieldset>
              <Radio name="size" type="radio" value="S" title="S" />
              <Radio name="size" type="radio" value="M" title="M" />
              <Radio name="size" type="radio" value="L" title="L" />
              <Radio name="size" type="radio" value="XL" title="XL" />
            </fieldset>
          </Row>
          <NextButton>Выбрать</NextButton>
        </StepForm>
      </Container>
    </Layout>
  );
};

export default SecondStep;
