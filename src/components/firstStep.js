import React, { useState } from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

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
    grid-template-rows: 30px max-content;
    border-top: ${(props) => (props.bordered ? "4.5px solid #fff" : "none")};
  }

  & fieldset {
    border: none;
  }
  & fieldset label {
    margin-right: 20px;
  }
`;

const List = styled.ul`
  list-style: none;
  font-size: var(--font-size-s);
  line-height: 23px;
  margin-left: 0;
  & li {
    margin-bottom: 0;
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
  padding-bottom: 20px;
  background: white;
  font-size: var(--font-size-m);
  font-weight: 900;
  color: #000;
  line-height: 106.4%;
  margin-top: 16px;
  cursor: pointer;
  text-decoration: none;
  margin-top: 128px;
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

const Price = styled.span`
  color: #bc9b16;
  position: absolute;
  right: 42px;
`;

const StepForm = styled.form`
  grid-row: 2/3;
  grid-column: 1/6;
  border-top: 4px solid var(--secondary-color);
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
  const [size, setSize] = useState();

  const submitStepHandler = (e) => {
    e.preventDefault();
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
      <Container mt="175">
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
          <Row>
            <RowLabel>Pack</RowLabel>
            <Price>2500₽</Price>
            <Radio name="pack" type="radio" value="starter" title="Starter" />
            <List>
              <li>1. стартовый номер</li>
              <li>2. карта</li>
              <li>3. Значок Reverse by Масть</li>
              <li>4. Welcome drink от Laboratorio Distilita</li>
              <li>5. два стикерпака</li>
            </List>
          </Row>
          <Row>
            <RowLabel>Pack</RowLabel>
            <Price>7000₽</Price>
            <Radio
              name="pack"
              type="radio"
              value="supporter"
              title="Supporter"
            />
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
          </Row>
          {pack === "supporter" && (
            <Row>
              <RowLabel>размер футболки</RowLabel>
              <fieldset>
                <Radio name="size" type="radio" value="S" title="S" />
                <Radio name="size" type="radio" value="M" title="M" />
                <Radio name="size" type="radio" value="L" title="L" />
                <Radio name="size" type="radio" value="XL" title="XL" />
              </fieldset>
            </Row>
          )}
          <NextButton>Выбрать</NextButton>
        </StepForm>
      </Container>
    </Layout>
  );
};

export default FirstStep;
