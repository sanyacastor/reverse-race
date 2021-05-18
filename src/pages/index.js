import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { motion, AnimatePresence } from "framer-motion";
import Div100vh from "react-div-100vh";
import SEO from "../components/seo";

import SwiperCore, { Thumbs } from "swiper";

import Header from "../components/header";
import Layout from "../components/layout";
import SliderPortal from "../components/SliderPortal";
import P5 from "../components/p5.js";

import LogoVk from "../images/social_vk.inline.svg";
import LogoTg from "../images/social_tg.inline.svg";
import LogoFb from "../images/social_fb.inline.svg";
import LogoInst from "../images/social_inst.inline.svg";
import LogoRR from "../images/logo_footer.svg";

import "swiper/swiper-bundle.min.css";

SwiperCore.use([Thumbs]);

const SponsorBar = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 27px;

  & a {
    display: block;
  }

  & .specialized {
    max-height: 35px;
    /* padding-top: 18px; */
    img {
      margin-bottom: 0;
    }
  }

  & .citycycle {
    max-height: 35px;
    img {
      max-height: 55px;
      margin-bottom: 0;
    }
  }

  & .social {
    display: flex;
    /* max-width: 158px; */
    align-items: space-around;
    /* padding-top: 15px; */
    max-height: 35px;
  }

  & .noPadding {
    padding: 0;
  }

  & .results {
    align-self: flex-end;
  }

  & .social__link + .social__link {
    margin-left: 8px;
  }

  & .social__logo {
    fill: var(--sucess-color);
    transition: all 0.2s ease;

    &:hover,
    &:focus {
      fill: var(--secondary-color);
    }
  }

  @media (max-width: 780px) {
    padding: 0 14px;

    & .social__logo {
      width: 19px;
      height: 19px;
    }

    & .specialized {
      /* padding-top: 15px; */
      max-width: 110px;
    }

    & .citycycle {
      /* padding-top: 8px; */
      img {
        max-height: 35px;
      }
    }

    & .results {
      display: none;
    }
  }
`;

const InlineLink = styled.a`
  font-weight: 900;
  font-size: var(--font-size-s);
  /* line-height: 23px; */
  text-decoration-line: underline;
  text-transform: uppercase;
  color: #bc9b16;
  cursor: pointer;
`;

const Email = styled.a`
  font-weight: 900;
  font-size: var(--font-size-s);
  color: var(--sucess-color);
`;
const Lead = styled.div`
  font-weight: 900;
  font-size: var(--font-size-s);
  text-transform: uppercase;
  color: #fff;
  grid-column: 2/3;
  margin-bottom: 92px;
  padding-bottom: 0;

  @media (min-width: 780px) {
    grid-column: 3/5;
    grid-row: 2/3;
    padding-bottom: 350px;
  }
`;

const FaqContainer = styled.section`
  display: flex;
  flex-direction: row;
  overflow-y: hidden;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-size: var(--font-size-s);
  /* line-height: 23px; */
  font-weight: 500;
  color: var(--secondary-color);
  padding-right: 41px;
  border-top: 4.5px solid #fff;

  & .text {
    padding-left: 24px;
    max-width: 828px;
    padding-top: 3.2em;
    line-height: 146%;
  }

  & .mb {
    margin: 0;
    padding: 0;
    margin-bottom: 24px;
  }

  & .aside {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    max-width: 496px;
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 550px;
    line-height: 1;
    text-transform: uppercase;
    color: var(--secondary-color);
  }

  & .aside__letter:first-child {
    line-height: 0.9;
    margin-bottom: 20px;

    @media (max-width: 780px) {
      margin-bottom: 0;
      line-height: 9px;
    }
  }

  & a {
    font-weight: 900;
    font-size: var(--font-size-s);
    color: var(--sucess-color);
    text-transform: uppercase;

    @media (max-width: 780px) {
      /* font-size: 7px;
      line-height: 9px; */
    }
  }

  @media (max-width: 780px) {
    flex-direction: column;
    font-size: var(--font-size-s);
    padding-right: 14px;
    line-height: 9px;

    & .aside {
      max-width: 100%;
      align-items: center;
      justify-content: center;
      font-size: 156px;
      flex-direction: row;
      flex-wrap: nowrap;
    }
  }
`;

const Text = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: var(--font-size-s);
  line-height: 146%;

  margin: 0;
  padding: 0;
  margin-bottom: 1.57em;

  @media (max-width: 780px) {
    /* font-size: 8.5px;
    line-height: 120%; */
  }
`;

const Heading = styled.h3`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 19px;
  line-height: 146%;
  color: var(--secondary-color);
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  margin-bottom: 0.26em;

  @media (max-width: 780px) {
    font-size: var(--font-size-s);
    line-height: 9px;
    font-weight: 900;
  }
`;

const SliderPortalWrapper = styled.div`
  display: none;
`;

const Founders = styled.div`
  width: 100%;
  color: #fff;
  grid-column: 2/5;
  grid-row: 2/3;
  text-align: center;
  font-weight: 900;
  font-size: var(--font-size-s);
  line-height: 146%;
  text-transform: uppercase;

  display: grid;
  grid-template-rows: max-content;
  grid-template-columns: 1fr 1fr;

  & span + span {
    margin-left: auto;
    text-align: right;
  }
  & .mobile {
    display: none;
  }

  & .col-2 .mobile {
    text-align: left;
    margin-left: 8px;
  }
  & .mobile p {
    margin: 0;
    padding: 0;
  }
  & .mobile p + p {
    margin-top: 12px;
  }

  @media (max-width: 780px) {
    & .desktop {
      display: none;
    }
    & .mobile {
      display: block;
    }
  }
`;

const Button = styled(Link)`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  display: block;
  font-weight: 900;
  white-space: nowrap;
  overflow: hidden;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 158px;
  line-height: 106.4%;
  background: none;
  border: none;
  outline: none;
  margin: 0 auto;
  padding-bottom: 16px;
  width: 100%;
  text-align: center;
  cursor: pointer;

  -webkit-text-stroke: 0.7px var(--secondary-color);
  -webkit-text-fill-color: var(--main-color);

  & :hover,
  & :focus {
    -webkit-text-stroke: var(--main-color);
    -webkit-text-fill-color: var(--secondary-color);
  }

  @media (min-width: 780px) {
    padding-left: 0;
    margin-bottom: 109px;
    text-align: center;
    -webkit-text-stroke: 2px var(--secondary-color);
    -webkit-text-fill-color: var(--main-color);
  }

  @media (min-width: 1330px) {
    padding-left: 41px;
    margin-left: 0;
    font-size: 158px;
    margin-bottom: 44px;
  }
`;

const InternalLink = styled(Link)`
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  font-size: var(--font-size-s);
  /* line-height: 23px; */
  line-height: 106.4%;
  color: var(--sucess-color);
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;

  &:hover,
  &:focus {
    color: var(--secondary-color);
  }

  transition: all 0.2s ease-in-out;
`;

const Accent = styled.span`
  font-weight: 900;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 14px 1fr 14px;
  transition: all 320ms ease;
  border-top: ${(props) => (props.bordered ? "1.6px solid #fff" : "none")};

  & .logo-wrapper {
    grid-row: 2/3;
    grid-column: 2/5;
    margin: 0 auto;
  }

  @media (min-width: 780px) {
    grid-template-columns: 40px 1fr 40px 2fr 40px;
    grid-template-rows: 30px max-content 37px;
    border-top: ${(props) => (props.bordered ? "4.5px solid #fff" : "none")};
  }
`;

const YearGallery = styled.div`
  height: 100%;
  color: #fff;
  display: grid;
  grid-row: 2/4;
  grid-column: 1/4;
  grid-template-columns: repeat(2, 50%);

  & .thumb {
    overflow: hidden;
    cursor: pointer;
  }
  & .thumb:hover .gatsby-image-wrapper {
    transform: scale(1.2);
  }
  & .gatsby-image-wrapper {
    height: 100%;
    transition: all 150ms ease-in-out;
  }

  @media (min-width: 780px) {
    grid-template-columns: repeat(4, 25%);
    grid-column: 4/6;
    grid-row: 1/4;
  }
`;

const YearTitle = styled.div`
  color: #fff;
  grid-column: 2/3;
  grid-row: 1/2;
  font-weight: 900;
  font-size: var(--font-size-s);
  /* line-height: 23px; */
  line-height: 106.4%;
  text-transform: uppercase;
  padding-top: 8px;
  padding-bottom: 8px;
  cursor: pointer;
  & .year__wrapper {
    color: var(--sucess-color);
  }

  & .year__wrapper,
  & .year__wrapper a {
    margin-bottom: 0;
    transition: color 250ms ease;
  }
  & .year__wrapper:hover,
  & .year__wrapper:hover a {
    color: var(--sucess-color);
  }

  @media (min-width: 780px) {
    & .year__wrapper {
      color: var(--secondary-color);
    }
  }
`;

const LinkToYear = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-weight: 900;
  font-size: var(--font-size-m);
  /* line-height: 117px; */
  line-height: 106.4%;

  text-decoration: underline;
  color: var(--sucess-color);

  @media (min-width: 780px) {
    text-decoration: none;
    color: var(--secondary-color);
  }
`;

const YearPoster = styled.div`
  margin-top: 10px;
  grid-column: 2/3;
  /* grid-row: 2/3; */

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

const YearLinks = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  font-size: var(--font-size-s);

  & a {
    margin-bottom: 21px;
    text-decoration: underline;
  }

  @media (min-width: 780px) {
    flex-direction: row;
    justify-content: space-between;
    margin-top: ${(props) => (props.mt ? props.mt + "px" : "0")};

    & a {
      margin-bottom: 21px;
      text-decoration: none;
    }
  }
`;

const Accordion = styled.section`
  overflow: hidden;
`;

const Collapsed = styled.div`
  max-height: ${(props) => (props.hide ? "5000px" : "0px")};
  opacity: ${(props) => (props.hide ? "1" : "0")};
  transition: all 250ms ease;
`;

const YearFact = styled(Container)`
  grid-template-rows: 8px max-content max-content max-content;
  color: #ffffff;
  text-transform: uppercase;

  & .fact__list-title {
    font-family: "Montserrat", sans-serif;
    color: #bc9b16;
    font-weight: 900;
    font-size: var(--font-size-s);
    /* line-height: 23px; */
    line-height: 106.4%;
    margin-bottom: 8px;
    margin-top: 16px;
  }
  & .fact__list-title p {
    margin-bottom: 0;
  }
  & .fact__wrapper {
    grid-column: 2/5;
    grid-row: 2/3;
  }
  & .fact__name {
    font-weight: 900;
    font-size: var(--font-size-s);
    /* line-height: 23px; */
    line-height: 106.4%;
    display: flex;
    align-items: flex-end;
  }
  & .fact__value {
    font-weight: 900;
    font-size: var(--font-size-m);
    /* line-height: 117px; */
    line-height: 106.4%;
    display: flex;
    align-items: flex-end;
  }
  & .fact__list {
    grid-column: 2/4;
    grid-row: 3/4;
    list-style: none;
    margin: 0;
    font-weight: 900;
    font-size: var(--font-size-s);
    /* line-height: 23px; */
    line-height: 1;
  }
  & .fact__list li {
    margin-bottom: 0;
  }
  & .mb {
    margin-bottom: 24px;
  }

  & .fact__col-1 {
    grid-column: 2/3;
    grid-row: 3/3;
  }

  & .fact__col-2 {
    grid-column: 2/3;
    grid-row: 4/4;
    padding-top: 10px;
  }
  & .fact__col-2 .fact__list {
    margin-bottom: 10px;
  }
  & .fact__col-2 .fact__list.mb40 {
    margin-bottom: 40px;
  }
  & .fact__col-2 .fact__list.mb50 {
    margin-bottom: 44px;
  }
  & .fact__col-2 .fact__list.mb70 {
    margin-bottom: 64px;
  }

  @media (min-width: 780px) {
    grid-template-rows: 8px max-content max-content;

    & .fact__col-2 .fact__list {
      margin-bottom: 148px;
    }
    & .fact__col-2 {
      grid-column: 4/5;
      grid-row: 3/4;
      padding-top: 45px;
    }
    & .fact__col-1 {
      grid-column: 2/4;
      grid-row: 3/4;
    }
    & .mb {
      margin-bottom: 24px;
    }
  }

  & li + li {
    margin-top: 2px;
  }
`;

const FaqPage = (props) => {
  const posters = props.data.posters.edges;
  const s1 = useRef(null);
  const s2 = useRef(null);
  const s3 = useRef(null);
  const s4 = useRef(null);

  const sections = [s1, s2, s3, s4];

  const {
    slides2017,
    slides2018,
    slides2019,
    slides2020,
    full2017,
    full2018,
    full2019,
    full2020,
  } = props.data;

  const [visible, setVisible] = useState(false);
  const [currentYear, setCurrentYear] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(null);
  const [collapsed, setCollapsed] = useState([0, 0, 0, 0]);

  const showGallery = (y) => {
    setVisible(true);
    setCurrentYear(y);
  };
  const closeGallery = () => {
    setVisible(false);
  };

  const handleYearSelect = (state, n) => {
    setCollapsed(state);
    setTimeout(() => {
      sections[n].current.scrollIntoView();
    }, 500);
  };

  return (
    <Layout>
      <SEO title="Reverse Race FAQ" />
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Div100vh style={{ height: "100rvh", overflow: "hidden" }}>
            <Header />
            <P5 />
            <SponsorBar>
              <div className="social">
                <Link
                  className="social__link"
                  to="https://vk.com/reverse_race"
                  target="blank"
                >
                  <LogoVk className="social__logo" />
                </Link>
                <Link
                  className="social__link"
                  to="https://www.instagram.com/reverse_race"
                  target="blank"
                >
                  <LogoInst className="social__logo" />
                </Link>
                <Link
                  className="social__link"
                  to="https://www.facebook.com/reverserace"
                  target="blank"
                >
                  <LogoFb className="social__logo" />
                </Link>
                <Link
                  className="social__link"
                  to="https://t.me/gravel_king"
                  target="blank"
                >
                  <LogoTg className="social__logo" />
                </Link>
              </div>
            </SponsorBar>
          </Div100vh>
          <Container>
            <Lead>
              <Text>
                REVERSE SIDE OF THE ROAD — Это не просто гонка и даже не
                соревнование. Небольшой трёхдневный лагерь на берегу озера с
                разговорами у костра в хорошей компании единомышленников. Повод
                встретится на свежем воздухе, немного попотеть и создать тёплые
                воспоминания. Трасса представляет из себя гравийную дорогу с
                участками асфальта и лесных просёлков – Ощущения несравнимые ни
                с чем.
              </Text>
            </Lead>
          </Container>
          {/* YEAR 2020 */}
          <Accordion ref={s1}>
            <Container bordered>
              <YearTitle onClick={() => handleYearSelect([1, 0, 0, 0], 0)}>
                <p className="year__wrapper">
                  o. YEl’chinskoye
                  <br />
                  <LinkToYear>2020</LinkToYear>
                </p>
              </YearTitle>
              <YearGallery>
                {slides2020.edges.map((s, ndx) => {
                  return (
                    <div
                      className="thumb"
                      onClick={() => {
                        setCurrentSlide(ndx);
                        showGallery(2020);
                      }}
                    >
                      <GatsbyImage
                        image={s.node.childImageSharp.gatsbyImageData}
                      />
                    </div>
                  );
                })}
              </YearGallery>
            </Container>
            <Collapsed hide={collapsed[0]}>
              <Container bordered>
                <YearPoster>
                  <GatsbyImage
                    image={posters[2].node.childImageSharp.gatsbyImageData}
                  />
                </YearPoster>
                <YearDescription>
                  Гонка Reverse Side of The Road разрослась до небывалого
                  масштаба. Холмистый карельский лес с озером, скрытым на картах
                  гугла и яндекса – эта локация как нельзя лучше вписалась в
                  формат фестиваля. Потрясающая погода, заплывы под звездным
                  небом и сотни пар бритых велосипедных ног, которые отбивали
                  ритм на танцполе до самого утра. Мы разработали и разметили
                  две трассы: большой и малый круги (150 и 80км соответственно).
                  Каждый мог выбрать маршрут согласно своей подготовке и
                  желаниям. Все как всегда: каменные спуски и песчаные ловушки;
                  немного грязи тут, немного грязи там. Легкое приключение,
                  способное закалить самурайский дух, но позволяющее выйти сухим
                  из воды. Не всем, правда, удалось, но всем досталось. Под
                  вечер состоялось награждение участников, во время которого мы
                  выяснили, что Максим Кравцов отлично исполняет рэп про
                  фикседгир, торс Севы все так же прекрасен, а Эдик тот еще
                  экстремал: чтобы попасть на гонку, ему пришлось ночами
                  пробираться через реки, поля, леса и пересекать границу России
                  и Белоруссии. Дальнейшие события описываются двумя словами –
                  Гревел Дэнс. Легендарная «карельская тройка» стала пятеркой:{" "}
                  <InlineLink to="#" target="blank">
                    Renks
                  </InlineLink>
                  ,{" "}
                  <InlineLink to="#" target="blank">
                    {" "}
                    Solid Angle
                  </InlineLink>
                  ,{" "}
                  <InlineLink to="#" target="blank">
                    e.Gest
                  </InlineLink>
                  ,{" "}
                  <InlineLink to="#" target="blank">
                    Ptzoid
                  </InlineLink>
                  ,{" "}
                  <InlineLink to="#" target="blank">
                    S.Friedt
                  </InlineLink>
                  . Рокешник от{" "}
                  <InlineLink to="#" target="blank">
                    R.A.W.S.
                  </InlineLink>
                  . И, возможно, такого вы больше никогда не увидите, а те, кто
                  видел, будут рассказывать своим детям: группа{" "}
                  <InlineLink to="#" target="blank">
                    ТРОЯР
                  </InlineLink>
                  ! Год был богат на крупные коллаборации. Специально для
                  Reverse Side of The Road 2020 пивоварня{" "}
                  <InlineLink to="#" target="blank">
                    Paradox
                  </InlineLink>{" "}
                  сварила смородиновое гозе,{" "}
                  <InlineLink to="#" target="blank">
                    Гоша Орехов
                  </InlineLink>{" "}
                  сделал партию сумок с нашим дизайном, а{" "}
                  <InlineLink to="#" target="blank">
                    Russian Raketa
                  </InlineLink>{" "}
                  – стильные колеса и звезды. Гонку поддержали{" "}
                  <InlineLink to="#" target="blank">
                    Specialized
                  </InlineLink>{" "}
                  и{" "}
                  <InlineLink to="#" target="blank">
                    CityCycle Moscow
                  </InlineLink>
                  , была выпущена большая партия фляг{" "}
                  <InlineLink to="#" target="blank">
                    Purist
                  </InlineLink>{" "}
                  с символикой RSRS. Уже не первый год за дизайн в рамках
                  коллабораций и айдентику гонки отвечает студия{" "}
                  <InlineLink to="#" target="blank">
                    SHOPLIFT DESIGN
                  </InlineLink>
                  . Есть такое выражение: brother from another mother – и это
                  как раз про гонку и SHOPLIFT DESIGN. Лучшее сотрудничество за
                  всю нашу историю.
                  <YearLinks mt={42}>
                    <InternalLink>трэк трассы 80км</InternalLink>
                    <InternalLink>трэк трассы 150км</InternalLink>
                    <InternalLink>плейлист</InternalLink>
                    <br />
                    <InternalLink>таблица результатов</InternalLink>
                  </YearLinks>
                </YearDescription>
              </Container>
              <YearFact bordered>
                <div className="fact__wrapper">
                  <div className="fact__name">лагерь</div>
                  <div className="fact__value">700 человек</div>
                </div>
              </YearFact>
              <YearFact bordered>
                <div className="fact__wrapper">
                  <div className="fact__name">гонка</div>
                  <div className="fact__value">350 участников</div>
                </div>
              </YearFact>
              <YearFact bordered>
                <div className="fact__wrapper">
                  <div className="fact__name">2 трассы</div>
                  <div className="fact__value">150 и 80км</div>
                </div>
              </YearFact>
              <YearFact bordered>
                <div className="fact__wrapper">
                  <div className="fact__name">факты</div>
                  <div className="fact__value">1 ПЕРЕПРАВА ВБРОД</div>
                </div>
                <ul className="fact__list mb">
                  <li>1 ТаНдем</li>
                  <li>
                    1 белоснежный «Дефендер»,
                    <br /> застрявший в яме
                  </li>
                  <li>1 сломанная ключица</li>
                  <li>1 найденный на маршруте тесак</li>
                  <li>
                    1 голая задница на танцполе и 1 <br /> кожаный ошейник
                  </li>
                  <li>1 мужик с кадилом</li>
                  <li>∞ количество пробитых камер</li>
                </ul>
              </YearFact>
              <YearFact bordered>
                <div className="fact__wrapper">
                  <div className="fact__name">победитель</div>
                  <div className="fact__value">Иван Шалахов</div>
                </div>
                <div className="fact__col-1">
                  <h2 className="fact__list-title">мультиспид</h2>
                  <ul className="fact__list">
                    <li>1. Николай Миловидов</li>
                    <li>2. Денис Дедков</li>
                    <li>3. Валентин Кушнарев</li>
                  </ul>

                  <h2 className="fact__list-title">синглспид</h2>
                  <ul className="fact__list">
                    <li>1. Всеволод Коваленков</li>
                    <li>2. Владимир Турба</li>
                    <li>3. Андрей Метель</li>
                  </ul>

                  <h2 className="fact__list-title">ФИКС</h2>
                  <ul className="fact__list">
                    <li>1. Никита Ракета</li>
                    <li>2. Фёдор Колоколов</li>
                    <li>3. Антон Карпекин</li>
                  </ul>

                  <h2 className="fact__list-title">73КМ</h2>
                  <ul className="fact__list">
                    <li>1. Данечка Гуревич</li>
                    <li>2. Наталия Шах</li>
                  </ul>
                </div>

                <div className="fact__col-2">
                  <ul className="fact__list">
                    <li>1. Mary roytman</li>
                    <li>2. Екатерина Борилкевич</li>
                    <li>3. Александра Маскова</li>
                  </ul>
                  <ul className="fact__list">
                    <li>1. Аня Фионова</li>
                    <li>2. Екатерина Папинова</li>
                    <li>3. Даша Бронникова</li>
                  </ul>
                </div>
              </YearFact>
            </Collapsed>
          </Accordion>
          {/* YEAR 2019 */}
          <Accordion ref={s2}>
            <Container bordered>
              <YearTitle onClick={() => handleYearSelect([0, 1, 0, 0], 1)}>
                <p className="year__wrapper">
                  o. Bol’shoye lugovoye <br />
                  <LinkToYear>2019</LinkToYear>
                </p>
              </YearTitle>
              <YearGallery>
                {slides2019.edges.map((s, ndx) => {
                  return (
                    <div
                      className="thumb"
                      onClick={() => {
                        setCurrentSlide(ndx);
                        showGallery(2019);
                      }}
                    >
                      <GatsbyImage
                        image={s.node.childImageSharp.gatsbyImageData}
                      />
                    </div>
                  );
                })}
              </YearGallery>
            </Container>
            <Collapsed hide={collapsed[1]}>
              <Container bordered>
                <YearPoster>
                  <GatsbyImage
                    image={posters[3].node.childImageSharp.gatsbyImageData}
                  />
                </YearPoster>
                <YearDescription>
                  Новая страница в истории гонки, сменившей название на Reverse
                  Side of The Road. Расстояния и скорости росли, а вместе с ними
                  и мастерство участников. Эта трасса длиной 124км хотя и
                  казалась на первый взгляд простой, к финишу отбирала все силы
                  гонщиков. Живописные поля сменялись грейдеркой, отбивающей
                  внутренности. Бесконечные широкие лесные тропы, песчаные
                  ловушки, брод, освежающий уставшие ноги, резкие подъемы и
                  спуски. В общем все, чего ждешь от отличной грэвел-трассы.
                  Перемены не обошли и лагерь. Лекции знаковых фигур
                  вело-комьюнити, выставка пленочной фотографии, диджей-сеты
                  легендарной «карельской тройки», танцы, белые ночи. Еще больше
                  людей и еще больше искренних эмоций. Ярким событием стал
                  приезд участников из Финляндии и Нидерландов, утром перед
                  гонкой всех разбудил крик: Perkele! Локи опять привез свой
                  спирт – и его опять было недостаточно. Reverse всегда будет не
                  только гонкой.
                  <YearLinks mt={205}>
                    <InternalLink>трэк трассы</InternalLink>
                    <InternalLink>плейлист</InternalLink>
                    <InternalLink>таблица результатов</InternalLink>
                  </YearLinks>
                </YearDescription>
              </Container>
              <YearFact bordered>
                <div className="fact__wrapper">
                  <div className="fact__name">лагерь</div>
                  <div className="fact__value">350 человек</div>
                </div>
              </YearFact>
              <YearFact bordered>
                <div className="fact__wrapper">
                  <div className="fact__name">гонка</div>
                  <div className="fact__value">193 участника</div>
                </div>
              </YearFact>
              <YearFact bordered>
                <div className="fact__wrapper">
                  <div className="fact__name">2 трассы</div>
                  <div className="fact__value">120 км</div>
                </div>
              </YearFact>
              <YearFact bordered>
                <div className="fact__wrapper">
                  <div className="fact__name">факты</div>
                  <div className="fact__value">1 Убитое колесо</div>
                </div>
                <ul className="fact__list mb">
                  <li>1 переправа вброд</li>
                  <li>1 сломанный шток</li>
                  <li>1 сломанный подседел</li>
                  <li>Пест опять приехал на толлбайке</li>
                </ul>
              </YearFact>
              <YearFact bordered>
                <div className="fact__wrapper">
                  <div className="fact__name">победитель</div>
                  <div className="fact__value">Иван Шалахов</div>
                </div>
                <div className="fact__col-1">
                  <h2 className="fact__list-title">мультиспид</h2>
                  <ul className="fact__list">
                    <li>1. Иван Шалахов</li>
                    <li>2. Николай Миловидов</li>
                    <li>3. Андрей Дрыженко</li>
                  </ul>

                  <h2 className="fact__list-title">синглспид</h2>
                  <ul className="fact__list">
                    <li>1. Всеволод Коваленков</li>
                    <li>2. Андрей Плужников</li>
                    <li>3. Максим Кравцов</li>
                  </ul>

                  <h2 className="fact__list-title">ФИКС</h2>
                  <ul className="fact__list">
                    <li>1. Влад Попов</li>
                    <li>2. Гоша Алексахин</li>
                    <li>3. Фёдор Колоколов</li>
                  </ul>
                </div>

                <div className="fact__col-2">
                  <ul className="fact__list mb50">
                    <li>1. Екатерина Борилкевич</li>
                    <li>2. Мария Ройтман</li>
                    <li>3. Александра Маскова</li>
                  </ul>
                  <ul className="fact__list mb70">
                    <li>1. Аня Филиппова</li>
                    <li>2. Екатерина Лукьянова</li>
                  </ul>
                  <ul className="fact__list">
                    <li>1. Ксения Кирилова</li>
                  </ul>
                </div>
              </YearFact>
            </Collapsed>
          </Accordion>
          {/* YEAR 2018 */}
          <Accordion ref={s3} maxHeight={292}>
            <Container bordered>
              <YearTitle onClick={() => handleYearSelect([0, 0, 1, 0], 2)}>
                <p className="year__wrapper">
                  o. vetrennoye <br />
                  <LinkToYear>2018</LinkToYear>
                </p>
              </YearTitle>
              <YearGallery>
                {slides2018.edges.map((s, ndx) => {
                  return (
                    <div
                      className="thumb"
                      onClick={() => {
                        setCurrentSlide(ndx);
                        showGallery(2018);
                      }}
                    >
                      <GatsbyImage
                        image={s.node.childImageSharp.gatsbyImageData}
                      />
                    </div>
                  );
                })}
              </YearGallery>
            </Container>
            <Collapsed hide={collapsed[2]}>
              <Container bordered>
                <YearPoster>
                  <GatsbyImage
                    image={posters[1].node.childImageSharp.gatsbyImageData}
                  />
                </YearPoster>
                <YearDescription>
                  Вторая гонка «Гревел Кинг». В два раза больше участников и
                  неравнодушных зрителей, в два раза более сложная и длинная
                  дистанция. Появилась достойная награда для гравийного короля:
                  корона ручной работы из металла, инкрустированная камнем с
                  гоночной трассы. Это была классическая гравийная трасса с
                  несколькими «но»: булыга, слепни и песок. Три составляющих
                  успеха, как классическая русская тройка, как полоски адидас.
                  ЭТО К ЧЕМУ?)) «Гревел Кинг» всегда был не только гонкой. Люди
                  приезжали в том числе из-за самой атмосферы кемпа. Лагерь
                  сильно разросся, разбили не меньше сотни палаток на одной
                  маленькой поляне у озера, Кач упал на одну из них. Локи сварил
                  первоклассный самогон, с помощью которого успешно избавился от
                  части соперников перед гонкой. Хорошая стратегия, но самогона
                  все равно привез недостаточно. Максим Каргинов в составе ВИА
                  «Булыга» задал тон веселью, попивая ящик «нулевки» и
                  периодически выкрикивая одну лишь фразу: «Как называется эта
                  страна?». А у кого-то бесследно пропали сосиски. История
                  каждого «Реверса» уникальна, и ее эпизоды – именно то, что
                  вспоминается и обсуждается весь следующий год.
                  <YearLinks mt={52}>
                    <InternalLink>трэк трассы</InternalLink>
                    <InternalLink>плейлист</InternalLink>
                    <InternalLink>таблица результатов</InternalLink>
                  </YearLinks>
                </YearDescription>
              </Container>
              <YearFact bordered>
                <div className="fact__wrapper">
                  <div className="fact__name">лагерь</div>
                  <div className="fact__value">250 человек</div>
                </div>
              </YearFact>
              <YearFact bordered>
                <div className="fact__wrapper">
                  <div className="fact__name">гонка</div>
                  <div className="fact__value">150 участников</div>
                </div>
              </YearFact>
              <YearFact bordered>
                <div className="fact__wrapper">
                  <div className="fact__name">трассы</div>
                  <div className="fact__value">90 км</div>
                </div>
              </YearFact>
              <YearFact bordered>
                <div className="fact__wrapper">
                  <div className="fact__name">факты</div>
                  <div className="fact__value">1 корона</div>
                </div>
                <ul className="fact__list mb">
                  <li>14 выпавших фляг</li>
                  <li>1 сломанный подседел</li>
                  <li>1 отвалившийся шатун</li>
                  <li>Пест на толлбайке</li>
                </ul>
              </YearFact>
              <YearFact bordered>
                <div className="fact__wrapper">
                  <div className="fact__name">победитель</div>
                  <div className="fact__value">Никита Русак</div>
                </div>
                <div className="fact__col-1 mb">
                  <h2 className="fact__list-title">мультиспид</h2>
                  <ul className="fact__list">
                    <li>1. Никита Русак</li>
                    <li>2. Никита Созонов</li>
                    <li>3. Василий Селезнев</li>
                  </ul>

                  <h2 className="fact__list-title">синглспид</h2>
                  <ul className="fact__list">
                    <li>1. Андрей Плужников</li>
                    <li>2. Илья Кузьмин</li>
                    <li>3. Александр Карпухин</li>
                  </ul>

                  <h2 className="fact__list-title">ФИКС</h2>
                  <ul className="fact__list">
                    <li>1. Даниил Крапивин</li>
                    <li>2. Александр Тананов</li>
                    <li>3. Георгий Алексахин</li>
                  </ul>

                  <h2 className="fact__list-title">девушки</h2>
                  <ul className="fact__list">
                    <li>1. Екатерина Борилкевич</li>
                    <li>2. Мария Ройтман</li>
                    <li>3. Александра Маскова</li>
                  </ul>
                </div>
              </YearFact>
            </Collapsed>
          </Accordion>
          {/* YEAR 2017 */}
          <Accordion ref={s4}>
            <Container bordered>
              <YearTitle onClick={() => handleYearSelect([0, 0, 0, 1], 3)}>
                <p className="year__wrapper">
                  o. vetrennoye
                  <br />
                  <LinkToYear>2017</LinkToYear>
                </p>
              </YearTitle>
              <YearGallery>
                {slides2017.edges.map((s, ndx) => {
                  return (
                    <div
                      className="thumb"
                      onClick={() => {
                        setCurrentSlide(ndx);
                        showGallery(2017);
                      }}
                    >
                      <GatsbyImage
                        image={s.node.childImageSharp.gatsbyImageData}
                      />
                    </div>
                  );
                })}
              </YearGallery>
            </Container>
            <Collapsed hide={collapsed[3]}>
              <Container bordered className={collapsed[3] ? null : "hide"}>
                <YearPoster>
                  <GatsbyImage
                    image={posters[0].node.childImageSharp.gatsbyImageData}
                  />
                </YearPoster>
                <YearDescription>
                  Дебютная гонка, которая тогда еще называлась «Цуклинг Гревел
                  Кинг», проходила недалеко от поселка Орехово в Ленинградской
                  области. На покорение 50-километровой трассы заявилось 75
                  участников, а также большое число зрителей, приехавших
                  отдохнуть в лагере и поддержать гонщиков. Круг трассы состоял
                  из нескольких отрезков, кардинально различающихся между собой.
                  От старта вела живописная лесная дорога, которая быстро
                  переходила в участок, усыпанный острым щебнем. Именно на этом
                  отрезке важную роль играла техническая подготовка гонщиков
                  (страшно вспомнить, сколько камер там полегло). Дальше шла
                  спринтерская заасфальтированная дорога, но она быстро
                  сменялась песчаными дюнами, в которых можно было завязнуть
                  надолго (особенно без широких покрышек). Под конец гонщики
                  вернулись на щебенку, которая забрала их последние силы. К
                  слову, финишировавшие не сдерживались в выражении эмоций. Это
                  короткое и красочное приключение дало пищу для размышлений:
                  что такое гравийные гонки, как к ним стоит готовиться и на чем
                  лучше ехать. Гонка стала ярким примером того, как классная
                  история рождается буквально из ничего – достаточно заручиться
                  поддержкой друзей и комьюнити. Дружелюбная атмосфера, яркие
                  эмоции и неожиданный новый формат предопределили дальнейшую
                  судьбу гонки, а участники начали вносить дату «Гревел Кинга» в
                  свои календари загодя.
                  <YearLinks mt={42}>
                    <InternalLink>трэк трассы</InternalLink>
                    <InternalLink>плейлист</InternalLink>
                    <InternalLink>таблица результатов</InternalLink>
                  </YearLinks>
                </YearDescription>
              </Container>
              <YearFact bordered className={collapsed[3] ? null : "hide"}>
                <div className="fact__wrapper">
                  <div className="fact__name">лагерь</div>
                  <div className="fact__value">100 человек</div>
                </div>
              </YearFact>
              <YearFact bordered className={collapsed[3] ? null : "hide"}>
                <div className="fact__wrapper">
                  <div className="fact__name">гонка</div>
                  <div className="fact__value">75 участника</div>
                </div>
              </YearFact>
              <YearFact bordered className={collapsed[3] ? null : "hide"}>
                <div className="fact__wrapper">
                  <div className="fact__name">трассы</div>
                  <div className="fact__value">50 км</div>
                </div>
              </YearFact>
              <YearFact bordered className={collapsed[3] ? null : "hide"}>
                <div className="fact__wrapper">
                  <div className="fact__name">факты</div>
                  <div className="fact__value">2 Собаки</div>
                </div>
                <ul className="fact__list mb">
                  <li>1 Фаер-шоу</li>
                  <li>2 сожженные брови</li>
                </ul>
              </YearFact>
              <YearFact bordered className={collapsed[3] ? null : "hide"}>
                <div className="fact__wrapper">
                  <div className="fact__name">победитель</div>
                  <div className="fact__value">Никита Щербина</div>
                </div>

                <div className="fact__col-1 mb">
                  <h2 className="fact__list-title">мультиспид</h2>
                  <ul className="fact__list">
                    <li>1. Никита Щербина</li>
                    <li>2. Федя Тихонов</li>
                    <li>3. Кирилл Поддубный</li>
                  </ul>

                  <h2 className="fact__list-title">синглспид</h2>
                  <ul className="fact__list">
                    <li>1. Всеволод Коваленков</li>
                    <li>2. Роман Домбровский</li>
                    <li>3. Макс Колосов</li>
                  </ul>

                  <h2 className="fact__list-title">ФИКС</h2>
                  <ul className="fact__list">
                    <li>1. Саша Тананов</li>
                    <li>2. Максим Кравцов</li>
                    <li>3. Никита Овсянников</li>
                  </ul>

                  <h2 className="fact__list-title">девушки</h2>
                  <ul className="fact__list">
                    <li>1. Анастасия Примакина</li>
                    <li>2. Александра Маскова</li>
                    <li>3. Саша Иванова</li>
                  </ul>
                </div>
              </YearFact>
            </Collapsed>
          </Accordion>
          <FaqContainer id="faq">
            <div className="aside">
              <span className="aside__letter">F</span>
              <span className="aside__letter">A</span>
              <span className="aside__letter">Q</span>
            </div>
            <div className="text">
              <Heading>ЧТО ЭТО ЗА ГОНКА?</Heading>
              <Text>
                Гонка по красивейшим гравийным маршрутам Ленинградской области,
                совмещенная с кемпингом у озера в приятной компании. Вас ждут 3
                дня отдыха в палатках у костра и увлекательное гравийное
                приключение.
              </Text>
              <Heading>А ЧТО ТАМ ПО ДИСТАНЦИЯМ?</Heading>
              <Text className="mb">
                <span className="mb">Два варианта на выбор:</span>
                <br />
                <Accent>1.</Accent> Большой круг 145км и 1200м набора. Из них
                немного асфальта, а все остальное – лесные грунтовые дороги с
                небольшим добавлением проселков. Рекомендуем серьёзно отнестись
                к выбору этой дистанции, прохождение её – тяжелый и утомительный
                труд, вам необходимо быть выносливым и подготовленным гонщиком.
                Не надо неосознанного ребячества и мыслей в стиле: «я чё, слабее
                других?». На этой дистанции идёт борьба за главные призы в
                основных категориях.
                <br />
              </Text>
              <Text className="mb">
                <Accent>2.</Accent> Малый круг 73км и 700м набора. На 70%
                совпадает с большим кругом. Как{" "}
                <Link
                  to="https://vk.com/sunday_chill_ride"
                  target="blank"
                  style={{ display: "inline-block" }}
                >
                  Sunday Chill Ride
                </Link>
                , только в субботу. Подойдет для тех, кто едет кайфовать, а не
                умирать. Все финишировавшие получат знаковые артефакты.
              </Text>
              <Text>
                Финиш обеих дистанций прямо у нашего лагеря, не нужно никуда
                идти, можно сразу валиться на землю.
              </Text>
              <Text style={{ magrinTop: "2em", marginBottom: "2em" }}>
                Стоимость участия 1700руб.
              </Text>
              <Heading>А ЧТО ТАМ ПО ПОКРЫТИЮ?</Heading>
              <Text>
                На всех маршрутах вас ждут быстрые грунтовые дороги, непростые
                подъемы, техничные песчаные участки и захватывающие спуски. Два
                недлинных, но выматывающих сегмента. Первый придется на оба
                маршрута, на нем вы обязательно промочите ноги и вспомните
                недобрым словом автора трассы. Второй – ждет только тех, кто
                отважился на большой круг. Казалось бы, скоростная широкая
                грунтовая дорога вдоль красивейших полей, но ямки, тысяча мелких
                ямок, забирающих все силы. И снова леса, подъемы, спуски, только
                вы, природа и ваша выносливость. Ближе к концу трассы будет шанс
                освежить ноги, пересекая брод.
              </Text>
              <Heading>А ЧТО ТАМ ПО ЕДЕ НА ТРАССЕ?</Heading>
              <Text>
                Три пункта питания позаботятся о воде и энергии в вашем теле.
                Там же вы можете получить техническую и медицинскую помощь.
              </Text>
              <Heading>
                А ЧТО ОБЯЗАТЕЛЬНО БРАТЬ НА СТАРТ?
                <br />
                ШЛЕМ ССУКА, ПРОСТО ВОЗЬМИ ШЛЕМ* *
              </Heading>
              <Text>
                Участие в гонке без шлема не допускается и не надо задавать
                вопросы по этому поводу. В этом году мы лишаемся приятного
                природного бонуса в виде белых ночей, и вам необходимо
                позаботится о свете. Существует вероятность, что финишировать вы
                будете в полной темноте. Заряженный телефон, чтобы в случае
                поломки, травмы или других обстоятельств добраться до лагеря.
              </Text>
              <Heading>КТО МОЖЕТ ПРИНЯТЬ УЧАСТИЕ? </Heading>
              <Text>
                Любой человек, обладающий подходящим по регламенту велосипедом,
                и предварительно зарегистрировавшийся.
              </Text>
              <Heading>КАКОЙ ВЕЛОСИПЕД ПОДОЙДЕТ? </Heading>
              <Text>
                Любой велосипед без амортизаторов, а если таковой есть, то
                обязательное условие для велосипеда – руль баран. Мы понимаем,
                что вероятно отсеиваем большой пласт туристических велосипедов,
                поэтому можно предварительно согласовать с организаторами ваше
                участие, если ваш велосипед не подходит под описанный выше
                критерий. Небольшой гайд в картинках о подходящем велосипеде{" "}
                <Link
                  to="https://vk.com/wall-146494886_1109 "
                  target="blank"
                  style={{ display: "inline-block" }}
                >
                  тут
                </Link>
                . Идеальным же будет гравийный велосипед на 40C резине.
              </Text>
              <Heading>ПРОФЕСИОНАЛЬНАЯ ГОНКА?</Heading>
              <Text>
                Мы ожидаем разнообразный состав участников, поэтому каждый
                найдет себе соперника по уровню. Главное быть готовым проехать
                100+ км по пересеченной местности.
              </Text>
              <Heading>БУДЕТ ЛИ У РЕБЯТ ИЗ ПИТЕРА ПРЕИМУЩЕСТВО?</Heading>
              <Text>Нет, мы опубликуем трек трассы за пару дней до гонки.</Text>

              <Heading>МОГУ ЛИ Я ПРИЕХАТЬ ТОЛЬКО НА ГОНКУ?</Heading>

              <Text>
                Да, не обязательно оставаться на все 3 дня кемпинга. Но вы
                многое упускаете. Не только отличный отдых на природе,
                выступления диджеев после гонки, но и лекции от знаковых людей
                велоиндустрии.
              </Text>

              <Heading>ГДЕ НАХОДИТСЯ ЛАГЕРЬ?</Heading>
              <Text>
                Точное расположение лагеря мы объявим за неделю до гонки. Пока
                можем сказать, что он находится примерно в 80 километрах от
                Санкт-Петербурга.
              </Text>
              <Heading>МОГУ ЛИ Я ПРИЕХАТЬ С СЕМЬЕЙ ИЛИ ДРУЗЬЯМИ?</Heading>
              <Text>Определенно да.</Text>
            </div>
          </FaqContainer>
          <div style={{ maxWidth: "100%", overflow: "hidden" }}>
            <Button to="/results">Результаты</Button>
          </div>
          <Container>
            <div className="logo-wrapper">
              <img src={LogoRR} />
            </div>
          </Container>
          <Container>
            <Founders>
              <div className="col-1">
                <span className="desktop">
                  Александр бочков — организация гонки.
                </span>
                <span className="mobile">
                  <p>Александр бочков — </p>
                  <p>Дмитрий Шевченко — </p>
                </span>
              </div>
              <div className="col-2">
                <span className="desktop">
                  Дмитрий Шевченко — поиск трассы, помощь в организации.
                </span>
                <span className="mobile">
                  <p>организация гонки.</p>
                  <p>поиск трассы, помощь в организации.</p>
                </span>
              </div>
            </Founders>
          </Container>
          <Container>
            <SponsorBar
              style={{
                "grid-column": "2/5",
                "text-align": "center",
                "grid-row": "2/3",
                padding: "0",
              }}
            >
              <div className="social">
                <Link
                  className="social__link"
                  to="https://vk.com/reverse_race"
                  target="blank"
                >
                  <LogoVk className="social__logo" />
                </Link>
                <Link
                  className="social__link"
                  to="https://www.instagram.com/reverse_race"
                  target="blank"
                >
                  <LogoInst className="social__logo" />
                </Link>
                <Link
                  className="social__link"
                  to="https://www.facebook.com/reverserace"
                  target="blank"
                >
                  <LogoFb className="social__logo" />
                </Link>
                <Link
                  className="social__link"
                  to="https://t.me/gravel_king"
                  target="blank"
                >
                  <LogoTg className="social__logo" />
                </Link>
              </div>
            </SponsorBar>
          </Container>
          <Container>
            <span style={{ "grid-column": "2/5", "text-align": "center" }}>
              <Email href="mailto:INFO@REVERSIDE.RU">INFO@REVERSIDE.RU</Email>
            </span>
          </Container>
          {currentYear === 2020 && visible ? (
            <SliderPortal
              close={closeGallery}
              images={full2020.edges}
              slide={currentSlide}
            />
          ) : null}
          {currentYear === 2019 && visible ? (
            <SliderPortal
              close={closeGallery}
              images={full2019.edges}
              slide={currentSlide}
            />
          ) : null}
          {currentYear === 2018 && visible ? (
            <SliderPortal
              close={closeGallery}
              images={full2018.edges}
              slide={currentSlide}
            />
          ) : null}
          {currentYear === 2017 && visible ? (
            <SliderPortal
              close={closeGallery}
              images={full2017.edges}
              slide={currentSlide}
            />
          ) : null}
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
};

export default FaqPage;

export const query = graphql`
  {
    posters: allFile(filter: { name: { regex: "/poster.*/" } }) {
      edges {
        node {
          id
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
      }
    }
    logoFooter: allFile(filter: { name: { eq: "logo_footer" } }) {
      edges {
        node {
          id
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
      }
    }
    slides2017: allFile(filter: { name: { regex: "/slide_2017.*/" } }) {
      edges {
        node {
          id
          childImageSharp {
            gatsbyImageData(quality: 50, layout: FULL_WIDTH, aspectRatio: 1.77)
          }
        }
      }
    }
    slides2018: allFile(filter: { name: { regex: "/slide_2018.*/" } }) {
      edges {
        node {
          id
          childImageSharp {
            gatsbyImageData(quality: 50, layout: FULL_WIDTH, aspectRatio: 1.77)
          }
        }
      }
    }
    slides2019: allFile(filter: { name: { regex: "/slide_2019.*/" } }) {
      edges {
        node {
          id
          childImageSharp {
            gatsbyImageData(quality: 50, layout: FULL_WIDTH, aspectRatio: 1.77)
          }
        }
      }
    }
    slides2020: allFile(filter: { name: { regex: "/slide_2020.*/" } }) {
      edges {
        node {
          id
          childImageSharp {
            gatsbyImageData(quality: 50, layout: FULL_WIDTH, aspectRatio: 1.77)
          }
        }
      }
    }
    full2017: allFile(filter: { name: { regex: "/slide_2017.*/" } }) {
      edges {
        node {
          id
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
      }
    }
    full2018: allFile(filter: { name: { regex: "/slide_2018.*/" } }) {
      edges {
        node {
          id
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
      }
    }
    full2019: allFile(filter: { name: { regex: "/slide_2019.*/" } }) {
      edges {
        node {
          id
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
      }
    }
    full2020: allFile(filter: { name: { regex: "/slide_2020.*/" } }) {
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
`;
