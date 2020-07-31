import React from "react";
import Div100vh from "react-div-100vh";
import { Link } from "gatsby";
import Button from "../components/button";

import Header from "../components/header.js";
import Layout from "../components/layout";
import styled from "styled-components";
import P5 from "../components/p5.js";

import LogoVk from "../images/social_vk.inline.svg";
import LogoTg from "../images/social_tg.inline.svg";
import LogoFb from "../images/social_fb.inline.svg";
import LogoInst from "../images/social_inst.inline.svg";
import logoCity from "../images/logo_CityCycle.svg";
import logoSpec from "../images/logo_specialized.svg";

const Hero = styled(Div100vh)`
  min-width: 100%;
  overflow: hidden;
  position: relative;
`;

const SponsorBar = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 41px;
  max-height: 77px;

  & a {
    display: block;
  }

  & .specialized {
    padding-top: 18px;
  }

  & .social {
    display: flex;
    max-width: 158px;
    align-items: space-around;
    padding-top: 15px;
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
      transition: all 0.2s ease;
      max-width: 110px;
    }

    & .cityCycle {
      transition: all 0.2s ease;
      max-width: 61px;
    }
  }
`;

const FaqContainer = styled.section`
  display: flex;
  flex-direction: row;
  overflow-y: hidden;
  font-family: "Montserrat-medium", sans-serif;
  font-style: normal;
  font-size: 19px;
  line-height: 23px;
  font-weight: 500;
  color: var(--secondary-color);
  padding-right: 41px;

  & .text {
    padding-left: 24px;
    max-width: 828px;
    padding-top: 3.2em;
  }

  & .mb {
    margin: 0;
    padding: 0;
    margin-bottom: 0.26em;
  }

  & .aside {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    max-width: 496px;
    font-family: Montserrat, sans-serif;
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
    font-size: 19px;
    color: var(--sucess-color);
    text-transform: uppercase;

    @media (max-width: 780px) {
      font-size: 7px;
      line-height: 9px;
    }
  }

  @media (max-width: 780px) {
    flex-direction: column;
    font-size: 7px;
    padding-right: 14px;
    line-height: 9px;

    & .aside {
      max-width: 100%;
      align-items: center;
      justify-content: center;
      font-size: 156px;
      flex-direction: row;
    }
  }
`;

const Text = styled.p`
  font-family: "Montserrat-medium", sans-serif;
  font-size: 19px;
  line-height: 23px;

  margin: 0;
  padding: 0;
  margin-bottom: 1.57em;

  @media (max-width: 780px) {
    font-size: 8.5px;
    line-height: 120%;
  }
`;

const Heading = styled.h3`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 19px;
  line-height: 23px;
  color: var(--secondary-color);
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  margin-bottom: 0.26em;

  @media (max-width: 780px) {
    font-size: 7px;
    line-height: 9px;
  }
`;

const Accent = styled.span`
  font-weight: 900;
`;

const FaqPage = () => {
  return (
    <Layout>
      <Div100vh style={{minHeight: '90rvh', overflow: 'hidden'}}>
        <Header/>
        <P5/>
      </Div100vh >
      <SponsorBar>
          <Link
            className='specialized'
            to='https://www.specialized.com/ru/ru'
            target='blank'
          >
            <img src={logoSpec} alt='specialized' />
          </Link>
          <div className='social'>
            <Link
              className='social__link'
              to='https://vk.com/reverse_race'
              target='blank'
            >
              <LogoVk className='social__logo' />
            </Link>
            <Link
              className='social__link'
              to='https://www.instagram.com/reverse_race'
              target='blank'
            >
              <LogoInst className='social__logo' />
            </Link>
            <Link
              className='social__link'
              to='https://www.facebook.com/reverserace'
              target='blank'
            >
              <LogoFb className='social__logo' />
            </Link>
            <Link
              className='social__link'
              to='https://t.me/gravel_king'
              target='blank'
            >
              <LogoTg className='social__logo' />
            </Link>
          </div>
          <Link className='cityCycle' to='https://citycycle.ru' target='blank'>
            <img src={logoCity} alt='cityCycle' />
          </Link>
        </SponsorBar>

      <FaqContainer id='faq'>
        <div className='aside'>
          <span className='aside__letter'>F</span>
          <span className='aside__letter'>A</span>
          <span className='aside__letter'>Q</span>
        </div>
        <div className='text'>
          <Heading>ЧТО ЭТО ЗА ГОНКА?</Heading>
          <Text>
            Гонка по красивейшим гравийным маршрутам Ленинградской области,
            совмещенная с кемпингом у озера в приятной компании. Вас ждут 3 дня
            отдыха в палатках у костра и увлекательное гравийное приключение.
          </Text>
          <Heading>А ЧТО ТАМ ПО ДИСТАНЦИЯМ?</Heading>
          <Text className='mb'>
            <span className='mb'>Два варианта на выбор:</span>
            <br />
            <Accent>1.</Accent> Большой круг 145км и 1200м набора. Из них
            немного асфальта, а все остальное – лесные грунтовые дороги с
            небольшим добавлением проселков. Рекомендуем серьёзно отнестись к
            выбору этой дистанции, прохождение её – тяжелый и утомительный труд,
            вам необходимо быть выносливым и подготовленным гонщиком. Не надо
            неосознанного ребячества и мыслей в стиле: «я чё, слабее других?».
            На этой дистанции идёт борьба за главные призы в основных
            категориях.
            <br />
          </Text>
          <Text>
            <Accent>2.</Accent> Малый круг 73км и 700м набора. На 70% совпадает
            с большим кругом. Как{" "}
            <Link
              to='https://vk.com/sunday_chill_ride'
              target='blank'
              style={{ display: "inline-block" }}
            >
              Sunday Chill Ride
            </Link>
            , только в субботу. Подойдет для тех, кто едет кайфовать, а не
            умирать. Все финишировавшие получат знаковые артефакты.
          </Text>
          <Text>
            Финиш обеих дистанций прямо у нашего лагеря, не нужно никуда идти,
            можно сразу валиться на землю.
          </Text>
          <Heading>А ЧТО ТАМ ПО ПОКРЫТИЮ?</Heading>
          <Text>
            На всех маршрутах вас ждут быстрые грунтовые дороги, непростые
            подъемы, техничные песчаные участки и захватывающие спуски. Два
            недлинных, но выматывающих сегмента. Первый придется на оба
            маршрута, на нем вы обязательно промочите ноги и вспомните недобрым
            словом автора трассы. Второй – ждет только тех, кто отважился на
            большой круг. Казалось бы, скоростная широкая грунтовая дорога вдоль
            красивейших полей, но ямки, тысяча мелких ямок, забирающих все силы.
            И снова леса, подъемы, спуски, только вы, природа и ваша
            выносливость. Ближе к концу трассы будет шанс освежить ноги,
            пересекая брод.
          </Text>
          <Heading>А ЧТО ТАМ ПО ЕДЕ НА ТРАССЕ?</Heading>
          <Text>
            Три пункта питания позаботятся о воде и энергии в вашем теле. Там же
            вы можете получить техническую и медицинскую помощь.
          </Text>
          <Heading>
            А ЧТО ОБЯЗАТЕЛЬНО БРАТЬ НА СТАРТ?
            <br />
            ШЛЕМ ССУКА, ПРОСТО ВОЗЬМИ ШЛЕМ* *
          </Heading>
          <Text>
            Участие в гонке без шлема не допускается и не надо задавать вопросы
            по этому поводу. В этом году мы лишаемся приятного природного бонуса
            в виде белых ночей, и вам необходимо позаботится о свете. Существует
            вероятность, что финишировать вы будете в полной темноте. Заряженный
            телефон, чтобы в случае поломки, травмы или других обстоятельств
            добраться до лагеря.
          </Text>
          <Heading>ТО МОЖЕТ ПРИНЯТЬ УЧАСТИЕ? </Heading>
          <Text>
            Любой человек, обладающий подходящим по регламенту велосипедом, и
            предварительно зарегистрировавшийся.
          </Text>
          <Heading>КАКОЙ ВЕЛОСИПЕД ПОДОЙДЕТ? </Heading>
          <Text>
            Любой велосипед без амортизаторов, а если таковой есть, то
            обязательное условие для велосипеда – руль баран. Мы понимаем, что
            вероятно отсеиваем большой пласт туристических велосипедов, поэтому
            можно предварительно согласовать с организаторами ваше участие, если
            ваш велосипед не подходит под описанный выше критерий. Небольшой
            гайд в картинках о подходящем велосипеде{" "}
            <Link
              to='https://vk.com/wall-146494886_1109 '
              target='blank'
              style={{ display: "inline-block" }}
            >
              тут
            </Link>
            . Идеальным же будет гравийный велосипед на 40C резине.
          </Text>
          <Heading>ПРОФФЕСИОНАЛЬНАЯ ГОНКА?</Heading>
          <Text>
            Мы ожидаем разнообразный состав участников, поэтому каждый найдет
            себе соперника по уровню. Главное быть готовым проехать 100+ км по
            пересеченной местности.
          </Text>
          <Heading>БУДЕТ ЛИ У РЕБЯТ ИЗ ПИТЕРА ПРЕИМУЩЕСТВО?</Heading>
          <Text>Нет, мы опубликуем трек трассы за пару дней до гонки.</Text>

          <Heading>МОГУ ЛИ Я ПРИЕХАТЬ ТОЛЬКО НА ГОНКУ?</Heading>

          <Text>
            Да, не обязательно оставаться на все 3 дня кемпинга. Но вы многое
            упускаете. Не только отличный отдых на природе, выступления диджеев
            после гонки, но и лекции от знаковых людей велоиндустрии.
          </Text>

          <Heading>ГДЕ НАХОДИТСЯ ЛАГЕРЬ?</Heading>
          <Text>
            Точное расположение лагеря мы объявим за неделю до гонки. Пока можем
            сказать, что он находится примерно в 80 километрах от
            Санкт-Петербурга.
          </Text>
          <Heading>МОГУ ЛИ Я ПРИЕХАТЬ С СЕМЬЕЙ ИЛИ ДРУЗЬЯМИ?</Heading>
          <Text>Определенно да.</Text>
        </div>
      </FaqContainer>

      <Link to='/registration' style={{ textDecoration: "none" }}>
        <Button
          caption='регистрация'
          invert={true}
          style={{ fontSize: "158px" }}
          p={0.2}
        />
      </Link>
    </Layout>
  );
};

export default FaqPage;
