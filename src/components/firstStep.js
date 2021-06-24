import React, { useState } from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Radio from "../components/radio";
import Row from "../components/row";
import RowLabel from "../components/rowLabel";

import Layout from "./layout";

const List = styled.ul`
  list-style: none;
  font-size: var(--font-size-s);
  line-height: 23px;
  margin-left: 0;
  margin-bottom: 73px;
  padding-right: 41px;
  & li {
    margin-bottom: 0;
  }
  @media (min-width: 780px) {
    margin-bottom: 12px;
  }
`;

const YearPoster = styled.div`
  margin-top: 10px;
  grid-column: 2/3;

  @media (min-width: 780px) {
    grid-column: 2/3;
    grid-row: 2/3;
  }
`;

const YearDescription = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
  color: #fff;
  margin-top: 35px;

  @media (min-width: 780px) {
    grid-column: 4/5;
    grid-row: 1/3;
  }
`;

const DonateButton = styled.a`
  width: 100%;
  display: block;
  text-align: center;
  text-transform: uppercase;
  padding-top: 10px;
  padding-bottom: 11px;
  background: white;
  font-size: var(--font-size-m);
  font-weight: 900;
  color: #fff;
  line-height: 106.4%;
  margin-top: 16px;
  cursor: pointer;
  text-decoration: none;
  margin-bottom: -60px;
  transition: all 320ms ease;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  letter-spacing: 2px;

  &:hover {
    color: var(--main-color);
  }

  @media (min-width: 780px) {
    margin-top: 20px;
    padding-bottom: 20px;
  }
`;

const NextButton = styled.button`
  position: relative;
  background: #fff;
  width: 100%;
  border: none;
  font-size: var(--font-size-xl);
  line-height: 106.4%;
  padding: 15px 0;
  text-align: center;
  font-weight: 900;
  color: #fff;
  -webkit-text-stroke: 1.6px var(--main-color);
  text-transform: uppercase;
  cursor: pointer;
  transition: all 320ms ease;

  & :disabled {
    -webkit-text-stroke: 1.6px rgba(0, 0, 0, 0.2);
  }
  &[disabled]:hover {
    -webkit-text-stroke: 1.6px rgba(0, 0, 0, 0.2);
    color: #fff;
  }
  & :hover {
    color: #000;
  }
`;

const Price = styled.span`
  position: absolute;
  bottom: 17px;
  text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,
    1px 1px 0 #fff;
  color: #000;
  transition: all 320ms ease;
  top: auto;
  bottom: 0;

  @media (min-width: 780px) {
    top: 14px;
    right: 42px;
  }

  @media (min-width: 1024px) {
    top: 32px;
  }
`;

const OkLabel = styled.span`
  font-weight: 900;
  font-size: var(--font-size-s);
  color: var(--main-color);
  text-transform: uppercase;
  text-shadow: none;
  position: absolute;
  top: 5px;
  left: 12px;
  line-height: 1;
  margin-bottom: 14px;

  @media (min-width: 1024px) {
    top: 12px;
    left: 41px;
  }
`;

const SizeLink = styled.a`
  text-decoration: underline;
  position: absolute;
  bottom: 0;
  right: 14px;
  font-size: var(--font-size-s);
  color: var(--sucess-color);
  line-height: 1;
  margin-bottom: 8px;

  @media (min-width: 1024px) {
    margin-bottom: 14px;
    right: 42px;
  }
`;

const StepForm = styled.form`
  grid-row: 2/3;
  grid-column: 1/6;
  border-top: 1.6px solid var(--secondary-color);

  @media (min-width: 780px) {
    border-top: 4.5px solid var(--secondary-color);
  }
`;

const Container = styled.div`
  margin-top: 94px;
  color: #fff;
  display: grid;
  grid-template-columns: 14px 1fr 14px;
  transition: all 320ms ease;

  & .next-button-wrapper {
    position: relative;
  }

  @media (min-width: 780px) {
    margin-top: ${(props) => props.mt + "px"};
    grid-template-columns: 40px 1fr 40px 2fr 40px;
    grid-template-rows: 30px max-content;
  }

  & fieldset {
    border: none;
    margin-bottom: 0;
  }
  & fieldset label {
    margin-right: 20px;
  }
  & fieldset label:hover {
    color: var(--sucess-color);
    text-shadow: none;
  }
`;

const PackRow = styled(Row)`
  cursor: pointer;
  min-height: 110px;

  &:hover ${Price} {
    color: var(--sucess-color);
    text-shadow: none;
  }
  &:hover #pack_starter_label {
    color: var(--sucess-color);
    text-shadow: none;
  }
  &:hover #pack_supporter_label {
    color: var(--sucess-color);
    text-shadow: none;
  }

  & input:checked + label + span {
    color: var(--secondary-color);
    text-shadow: none;
  }

  & label:nth-child(3) {
    margin-top: 8px;
  }

  @media (min-width: 780px) {
    min-height: 52px;

    & label:nth-child(3) {
    margin-top: 0;
  }
  }
`;

const FirstStep = ({ nextStepHandler, updateHandler }) => {
  const { p2021 } = useStaticQuery(
    graphql`
      query post {
        p2021: allFile(filter: { name: { regex: "/poster_2021.*/" } }) {
          edges {
            node {
              id
              childImageSharp {
                gatsbyImageData(quality: 100, layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    `
  );

  const [pack, setPack] = useState();
  const [size, setSize] = useState("");

  const submitStepHandler = (e) => {
    e.preventDefault();
    updateHandler({ pack, size });
    nextStepHandler();
  };

  const changeHandler = (e) => {
    const name = e.target.name;
    if (name === "pack") {
      setPack(e.target.value);
    }
    if (name === "size") {
      setSize(e.target.value);
    }
  };

  return (
    <Layout>
      <Container mt="150">
        <YearPoster>
          <GatsbyImage
            image={p2021.edges[0].node.childImageSharp.gatsbyImageData}
          />
        </YearPoster>
        <YearDescription>
          Вместе мы сделали два Гревелкинга и после этого сделали два Реверса.
          Теперь у нас юбилей, нам пять лет. <br />
          <br />
          На этот раз у гонки нет спонсоров. Мы верим, что крутые мероприятия
          могут опираться только на поддержку комьюнити, быть самостоятельными и
          независимыми. По этой же причине не будет и спонсорских подарков, но
          без наград победители не останутся — для них мы готовим особенные
          призы. <br />
          <br />И Гревелкинг, и Реверс всегда работали на топливе нашего общего
          энтузиазма. Лайки и репосты, футболки и стикерпаки, стартовые взносы и
          работа волонтеров - только благодаря вашей помощи гонка продолжает
          существовать. <br />
          <br />В этом году, помимо базового Starter pack, доступен расширенный
          Supporter pack — для тех, кто хочет собрать полный набор
          коллекционного мерча (и поддержать организаторов). Также вы можете
          оставить любой донат на сайте. Мы ценим каждого из вас и делаем эту
          гонку с любовью. <br />
          <br />
          P.S. Гревелкинга не будет!
          <DonateButton
            href="https://www.tinkoff.ru/rm/bochkov.aleksandr29/Y1ZZr50891/"
            target="_blank"
          >
            Donate
          </DonateButton>
        </YearDescription>
      </Container>
      <Container mt="100">
        <StepForm
          onSubmit={submitStepHandler}
          onChange={(e) => changeHandler(e)}
        >
          <PackRow onClick={() => setPack("starter")}>
            <RowLabel>Pack</RowLabel>
            <Radio
              name="pack"
              type="radio"
              value="starter"
              title="Starter"
              checked={pack === "starter"}
            />
            <Price>2500₽</Price>
            {pack === "starter" && (
              <List>
                <li>1. стартовый номер</li>
                <li>2. карта</li>
                <li>3. Значок Reverse by Масть</li>
                <li>4. Welcome drink от Laboratorio Distilita</li>
                <li>5. два стикерпака</li>
              </List>
            )}
          </PackRow>
          <PackRow onClick={() => setPack("supporter")}>
            <RowLabel>Pack</RowLabel>

            <Radio
              name="pack"
              type="radio"
              value="supporter"
              title="Supporter"
              checked={pack === "supporter"}
            />
            <Price>7000₽</Price>

            {pack === "supporter" && (
              <List>
                <li>1. стартовый номер</li>
                <li>2. карта</li>
                <li>3. Значок Reverse by Масть</li>
                <li>4. Welcome drink от Laboratorio Distilita</li>
                <li>5. два стикерпака</li>
                <li>6. Topcap reverse</li>
                <li>
                  7. 0,5 л настойки «Булыга» от Laboratorio Distilita, созданной
                  специально для Reverse Raсe
                </li>
                <li>8. Футболка Reverse Race </li>
              </List>
            )}
          </PackRow>
          {pack === "supporter" && (
            <Row>
              <RowLabel>размер футболки</RowLabel>
              <fieldset>
                <Radio
                  name="size"
                  type="radio"
                  value="S"
                  title="S"
                  checked={size === "S"}
                />
                <Radio
                  name="size"
                  type="radio"
                  value="M"
                  title="M"
                  checked={size === "M"}
                />
                <Radio
                  name="size"
                  type="radio"
                  value="L"
                  title="L"
                  checked={size === "L"}
                />
                <Radio
                  name="size"
                  type="radio"
                  value="XL"
                  title="XL"
                  checked={size === "XL"}
                />
              </fieldset>
              <SizeLink
                href="https://www.mygildan.com/store/eu/browse/productDetailsPage.jsp?productId=H000"
                target="_blank"
              >
                размерная сетка
              </SizeLink>
            </Row>
          )}
          <div className="next-button-wrapper">
            <NextButton
              disabled={
                !((pack === "supporter" && size.length) || pack === "starter")
              }
            >
              ОК
            </NextButton>
            <OkLabel>Перейти к регистрации</OkLabel>
          </div>
        </StepForm>
      </Container>
    </Layout>
  );
};

export default FirstStep;
