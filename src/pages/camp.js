import React from "react";
import { navigate } from "gatsby";
import Seo from "../components/seo";
import CrossButton from "../components/crossButton";

import Layout from "../components/layout";
import styled from "styled-components";

const FaqContainer = styled.section`
  display: flex;
  flex-direction: row;
  overflow-y: hidden;
  font-family: "Montserrat", sans-serif;
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
    font-size: 19px;
    color: var(--sucess-color);
    text-transform: uppercase;

    @media (max-width: 780px) {
      font-size: 11px;
      line-height: 14px;
    }
  }

  & .simple {
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    text-transform: none;
    text-decoration: underline;
    color: #fff;
  }

  @media (max-width: 780px) {
    flex-direction: column;
    font-size: 11px;
    padding-right: 14px;
    line-height: 14px;

    & .aside {
      max-width: 100%;
      align-items: center;
      justify-content: center;
      font-size: 125px;
      flex-direction: row;
      flex-wrap: nowrap;
    }
  }

  & .mobile_only {
    display: none;
  }

  & .desktop_only {
    display: flex;
  }

  & .track {
    @media (max-width: 940px) {
      display: none;
    }
  }

  @media (max-width: 780px) {
    & .mobile_only {
      display: block;
    }

    & .desktop_only {
      display: none;
    }
  }
`;

const Text = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 19px;
  line-height: 23px;

  margin: 0;
  padding: 0;
  margin-bottom: 1.57em;

  @media (max-width: 780px) {
    font-weight: 500;
    font-size: 11px;
    line-height: 120%;
  }
`;

const DownloadLink = styled.div`
  min-width: 118px;
  display: inline-block;

  & .mb {
    background: blue;
    margin-bottom: 20px;
  }

  @media (max-width: 780px) {
    min-width: 40px;
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
    font-size: 11px;
    line-height: 14px;
    font-weight: 900;
  }
`;

const Accent = styled.span`
  text-transform: uppercase;
  font-weight: 900;
`;

const Header2 = styled.h2`
  margin-left: 0;
  padding-left: 0;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 96px;
  line-height: 87%;
  text-transform: uppercase;

  @media (max-width: 780px) {
    font-size: 121px;
    line-height: 97px;
  }
`;

const goToHomePage = () => {
  navigate("/");
};

const FaqPage = () => {
  return (
    <Layout>
      <CrossButton action={goToHomePage} />
      <Seo title="Camp" />
      <FaqContainer id="faq" style={{ marginBottom: "2em" }}>
        <div className="aside desktop_only">
          <span className="aside__letter">Л</span>
          <span className="aside__letter">А</span>
          <span className="aside__letter">Г</span>
          <span className="aside__letter">Е</span>
          <span className="aside__letter">Р</span>
          <span className="aside__letter">Ь</span>
        </div>

        <div className="text">
          <Header2 className="mobile_only">
            ЛА-
            <br /> ГЕРЬ
          </Header2>
          <Heading style={{ marginBottom: "1.57em" }}>
            Ждем всех на берегу озера Тихое (Приозерсий район, Ленинградская
            область) с 16 по 18 июля. Гонка – 17 июля, старт в 10:30 утра.
          </Heading>
          <Text>
            <a
              href="https://goo.gl/maps/eEUUcUgRDZqnYQiLA"
              target="blank"
              style={{ display: "inline-block" }}
            >
              Координаты главной поляны
            </a>
          </Text>
          <Heading style={{ marginBottom: "1.2em" }}>Как добраться?</Heading>
          <Heading style={{ marginBottom: "1.2em" }}>На электричке:</Heading>
          <Heading>СОСНОВО.</Heading>
          <Text>
            От Финляндского вокзала едем до станции Сосново, оттуда 35 км по
            приятному асфальту до поляны.
          </Text>
          <Heading>
            <a
              href="https://goo.gl/maps/GrpVb8ktDVv98e6x8"
              target="blank"
              style={{ display: "inline-block" }}
            >
              Маршрут от станции до поляны
            </a>
          </Heading>
          <Heading style={{ marginBottom: "1.2em" }}>
            <a
              href="https://www.tutu.ru/spb/rasp.php?st1=20600&st2=47605&date=16.07.2021"
              target="blank"
              style={{ display: "inline-block" }}
            >
              Расписание электричек на пятницу
            </a>
          </Heading>
          <Heading>Лосево.</Heading>
          <Text>
            От Финляндского вокзала едем до станции Лосево, оттуда 25 км по
            приятному асфальту до поляны.
          </Text>
          <Heading>
            <a
              href="https://goo.gl/maps/gcXQzwu9i3mhNJLY7"
              target="blank"
              style={{ display: "inline-block" }}
            >
              Маршрут от станции до поляны
            </a>
          </Heading>
          <Heading style={{ marginBottom: "1.2em" }}>
            <a
              href="https://www.tutu.ru/spb/rasp.php?st1=20600&st2=47905&date=16.07.2021"
              target="blank"
              style={{ display: "inline-block" }}
            >
              Расписание электричек на пятницу
            </a>
          </Heading>
          <Heading>Обратите внимание!</Heading>
          <Text>
            Если вы планируете приехать на электричке в день гонки (17 июля), то
            вам подходит единственный поезд N6505 «Финляндский вокзал – Сосново»
            в 6:16 утра. На более поздней электричке вы однозначно не успеете к
            старту!
          </Text>
          <Text>
            Возле станции Сосново можно взять такси и доехать до съезда на о.
            Тихое (оттуда до лагеря примерно 500 метров), а может даже и до
            самой поляны. Как договоритесь с водителем.
          </Text>
          <Heading>На автомобиле:</Heading>
          <Text>
            До лагеря можно добраться двумя способами. Первый: по трассе
            «Сортавала». Не доезжая до Вуоксы, уходим налево на Брусничное
            шоссе. Съезд с асфальта будет примерно напротив самого озера.
            Обратите внимание! В пятницу вечером на этом маршруте могут быть
            пробки. Второй способ: трасса «Скандинавия».
          </Text>
          <Text>
            <Heading>Магазин, еда и кофе:</Heading>
            Ближайший к лагерю продуктовый магазин{" "}
            <a
              href="https://goo.gl/maps/iPhFxvuQi5wZSPyo9"
              target="blank"
              style={{ display: "inline-block" }}
            >
              {" "}
              «Магнит»
            </a>{" "}
            находится в пос. Красноозерное, до него около 10 км.
          </Text>
          <Text>
            На поляне в дни кэмпа будет возможность заказать еду (опция
            платная). В меню – кукуруза, лепешка с курицей и баклажанами на
            гриле, онигирадзу, хумус, бриошь с яичным салатом. К финишу гонки
            будет готово табуле из булгура. Все это – от команды Василия
            Баканова.
          </Text>
          <Text>
            Проект Hood отвечает за веганский пикник в лагере. Сможете
            попробовать хот-доги, воки и сэндвичи.
          </Text>
          <Text>
            Кофейный десант в составе кооператива{" "}
            <a
              href=" https://www.instagram.com/virage_cooperative/"
              target="blank"
              style={{ display: "inline-block" }}
            >
              {" "}
              «Вираж»
            </a>{" "}
            и московского велосипедного кафе{" "}
            <a
              href="https://instagram.com/rebellion____clubhouse"
              target="blank"
              style={{ display: "inline-block" }}
            >
              {" "}
              Rébellion Clubhouse
            </a>{" "}
            будет заваривать фильтр и альтернативу.
          </Text>
          <Text>
            Передвижной бар{" "}
            <a
              href="https://www.instagram.com/stoy.bar"
              target="blank"
              style={{ display: "inline-block" }}
            >
              Støy! Craft Bar
            </a>{" "}
            организует святое место, где будут разливаться пиво и сидр.
          </Text>
          <Text>
            <a
              href="https://instagram.com/laboratorio_distilita"
              target="blank"
              style={{ display: "inline-block" }}
            >
              Laboratorio Distilita
            </a>{" "}
            откроют на поляне домашний бар с крепкими напитками и вином.
            Обратите внимание! На поляне плохо ловит интернет, поэтому берите с
            собой наличные.
          </Text>
          <Heading>
            Обратите внимание! На поляне плохо ловит интернет, поэтому берите с
            собой наличные.
          </Heading>
          <br />
          <Heading>Ремонт и мастерские:</Heading>
          <Text>
            За ремонтом велосипедов будут следить сразу три мастерские:
          </Text>
          <Heading>
            <a
              href="https://www.instagram.com/pirate_cycles"
              target="blank"
              style={{ display: "inline-block" }}
            >
              Pirate Cycles
            </a>
          </Heading>
          <Heading>
            <a
              href="https://velomedik.ru"
              target="blank"
              style={{ display: "inline-block" }}
            >
              Веломедик
            </a>
          </Heading>
          <Heading>
            <a
              href="https://www.alienbike.ru"
              target="blank"
              style={{ display: "inline-block" }}
            >
              Alien Bike
            </a>
          </Heading>
          <br />
          <Text>
            На поляне будет зона, где вы сможете самостоятельно помыть свой
            велосипед до и после гонки. Ориентир – желтый керхер.
          </Text>
          <Heading>Чил-зоны:</Heading>
          <Text>
            Мы позаботились о вашем досуге и организуем на поляне игровую зону с
            разными активностями, где вы найдете волейбол, фрисби, бадминтон,
            мультидиск и может быть даже бильярд.
          </Text>
          <Text>
            Команда{" "}
            <a
              href="https://silavetra.com/"
              arget="blank"
              style={{ display: "inline-block" }}
            >
              
              «Сила Ветра»
            </a>{" "}
            привезет на озеро сапборды, арендовать их можно будет бесплатно. На
            озере вас также ждет secret place, увидите на месте.
          </Text>
          <Text>
            Тем, кто хочет открыть для себя что-то новое, советуем заглянуть на
            площадку экспериментального звука. Здесь можно поиграть на
            легендарных советских и японских аналоговых синтезаторах.
          </Text>
          <Heading>Огненный вопрос:</Heading>
          <Text>
            Разводить костры можно в специально отведенных для этого местах.
            Либо используйте мангал. Не оставляйте после себя марсианские
            пейзажи. Если хотите подогреть еду рядом с палаткой – воспользуйтесь
            горелкой.
          </Text>
          <Heading>Мусорный вопрос:</Heading>
          <Text>
            Поляна должна остаться после нас такой же чистой, как и до нас.
            Увезите с собой весь мусор. По возможности не используйте стеклянные
            бутылки, сминайте банки перед тем как выбросить в мусорный мешок.
            Используйте одноразовую бумажную посуду. Бычки кидайте в костер.
            Организаторы со своей стороны приложили максимум усилий, чтобы
            минимизировать количество пластика и другого мусора, сделайте то же
            самое.
          </Text>
          <Text>
            Главное правило работает так: берите столько упаковок еды и
            алкоголя, сколько способны отвезти обратно. Мусор – это не
            обязанность кого-то абстрактного, а личная ответственность каждого
            из вас!
          </Text>
          <Text>
            Ближайшее место, куда вы можете отвезти мусор, находится в пос.
            Красноозерное, мусорные баки за магазином «Магнит».
          </Text>
          <Heading>Гигиенические вопросы:</Heading>
          <Text>
            В лагере будет три санитарных зоны класса люкс, с огороженными
            туалетами и туалетной бумагой. Смывайте за собой и следите за
            чистотой в этих сакральных местах.
          </Text>
          <Text>
            Мыться, как и всегда, предстоит в озере. Но помните о природе,
            используйте натуральные средства, чтобы меньше загрязнять воду.
          </Text>
          <Heading>Очень важный вопрос:</Heading>
          <Text>
            Как и в прошлом году, в лагере будет введен режим тишины, в полночь
            с 16 на 17 июля. Это значит, что никаких шумных посиделок, песен,
            криков и ора после этого момента. Уважайте соседей, дайте
            возможность выспаться окружающим и приберегите силы на утро. Кутить
            будем на следующий день.
          </Text>
          <Text>
            Люди, нарушающие правило тишины, могут быть отстранены от участия в
            гонке.
          </Text>
          <Heading>Парковка:</Heading>
          <Text>
            Не разрешается ставить автомобили рядом с палатками на основной
            поляне. Для стоянки машин мы разметим парковочную зону на
            ограниченное количество мест. Расстояние до лагеря – около 500 м,
            будьте готовы прогуляться до своего любимого транспортного средства.
          </Text>
          <Header2>line — up</Header2>
          <Heading>16 июля</Heading>
          <Text>
            15:00 – Начало регистрации
            <br />
            15:00 – Начало работы фуд-корта
            <br />
            15:00 – Открытие основных зон отдыха
            <br />
            21:00 – Приветственное слово
            <br />
            23:00 – Конец регистрации (на этот день)
            <br />
            00:00 – ОТБОЙ
            <br />
          </Text>
          <Heading>17 июля</Heading>
          <Text>
            7:00 – Подъем
            <br />
            7:00 – Продолжение регистрации
            <br />
            9:00 – Брифинг
            <br />
            9:30 – Окончание регистрации
            <br />
            10:00 – Построение в стартовом окне
            <br />
            10:30 – Старт гонки
            <br />
            20:30 – Закрытие финишного окна
            <br />
            21:00 – Награждение
          </Text>
          <Heading>Party</Heading>
          <Text>
            22:00 – R.A.W.S.
            <br />
            23:20 – ТРОЯР
            <br />
            23:50 – Renks (Cool music)
            <br />
            Solid Angle (More cool music)
            <br />
            E.Gest (Liquid Drum & Base)
            <br />
            Feela sport (old but gold)
            <br />
          </Text>
          <Heading>18 июля</Heading>
          <Text>
            10:00 – Возобновление работы фуд-корта
            <br />
            10:00 – Музыкальное сопровождение от сонных диджеев
            <br />
            после 15:00 – сборы, отъезд и скупая слеза в память о прошедшем
            уикенде
          </Text>
          <Heading style={{ marginBottom: "2.2em" }}>
            с конца июля’21 по лето’22 – воспоминания
          </Heading>
          <Header2>
            Трек <span className="desktop_only track">трассы</span>
          </Header2>
          <Heading>
            <span style={{ minWidth: "100px", display: "inline-block" }}>
              170км
            </span>
            <a
              href="gpx/21_reverse_big.gpx"
              target="blank"
              style={{ marginLeft: "1.2em" }}
              download
            >
              скачать
            </a>
          </Heading>
          <Heading style={{ marginBottom: "1.2em" }}>
            <span style={{ minWidth: "100px", display: "inline-block" }}>
              90км
            </span>
            <a
              href="gpx/21_reverse_small.gpx"
              target="blank"
              style={{ marginLeft: "1.2em" }}
              download
            >
              скачать
            </a>
          </Heading>
          <Heading>В сухих цифрах:</Heading>
          <Text>
            17 июля в 9:00 на основной поляне проведем брифинг. Рекомендуем не
            пропускать, расскажем про трассу и актуальные новости по старту.
          </Text>
          <Text>
            СТАРТ ГОНКИ общий для обеих дистанций, будет находиться в 100 м от
            главной поляны.
          </Text>
          <Text>
            Для тех, кто не понял: в 10:30 утра общий старт. Старт общий! Для
            обеих дистанций! В 10:30! В 100 м от поляны! Все вместе! Еще есть
            вопросы по старту?
          </Text>
          <Text>
            Любые вопросы по перерегистрации (как участников, так и выбора
            трассы и дисциплины) должны быть решены и зафиксированы в зоне
            регистрации до 9:00 17 июля.
          </Text>
          <Text>
            Борьба за места происходит только внутри выбранной дисциплины.
          </Text>
          <Text>
            Если вы зарегистрировались на большой круг, но решили проехать
            малый, то мы просто зафиксируем ваше время.
          </Text>
          <Text>
            Для малой дистанции всего два призовых места, для нее и для него.
          </Text>
          <Text>
            На всех маршрутах вас ждут быстрые грунтовые дороги, техничные
            песчаные участки, изматывающие подъемы и захватывающие каменистые
            спуски. Сосновый лес иногда будет сменяться поселками. На укатанных
            лесных дорогах можно будет хорошо разглядеть не только облако
            оводов, быстро летящих за вами, но и лужи, броды, заброшенные ангары
            аэропорта и даже старую финскую железную дорогу.
          </Text>
          <Text>
            Если пройдет сильный дождь, трасса может сильно преобразиться, наше
            описание станет бессмысленным, а ваше приключение – беспощадным.
          </Text>
          <Text>
            Финиш обеих дистанций прямо у нашего лагеря, не нужно никуда идти,
            можно сразу валиться на землю.
          </Text>
          <Text>
            На трассе организованы три пункта питания для большого круга и один
            – для малого. Здесь вы можете пополнить запас воды во флягах и
            углеводов в теле. На всех пунктах питания есть аптечки, насосы и
            ремнаборы с камерами для ваших велосипедов.
          </Text>
          <Text>
            <Accent>Для большого круга:</Accent>
            <br />
            <Accent>1 пункт питания</Accent> – 55 км маршрута
            <br />
            <Accent>2 пункт питания</Accent> – 116 км маршрута
            <br />
            <Accent>3 пункт питания</Accent> – 142 км маршрута
            <br />
          </Text>
          <Text>
            <Accent>Для Малого круга:</Accent>
            <br />
            <Accent>1 пункт питания</Accent> – 56 км маршрута
            <br />
            <Accent>2 пункт питания</Accent> – 82 км маршрута
          </Text>
          <Text>
            Трасса в нескольких местах пересекает автодороги. Пожалуйста,
            сбавляйте скорость, смотрите по сторонам и выезжайте на дорогу с
            осторожностью. Будьте внимательны на закрытых поворотах, грунтовые и
            лесные дороги не лишены машин.
          </Text>
          <Text>
            Некоторые крутые спуски могут оканчиваться песком, камнями и узким
            проездом, будьте аккуратны.
          </Text>
          <Text>
            Если с вами случилось что-то серьезное, и вы не можете добраться до
            цивилизации, звоните нам. Но, пожалуйста, не надо этого делать, если
            вы просто устали. Наши номера будут написаны на карте в стартовом
            пакете.
          </Text>
          <Text>
            Если вы пробились и не взяли с собой запасную камеру, поздравляем.
            Идите пешком до ближайшего пункта питания, возможно, там вам
            помогут. Дальнейшее попадание в лагерь – теперь уже ваша забота и
            ваша личная ответственность. Мы вас, конечно, не бросим, но забрать
            сможем по мере возможностей.
          </Text>
        </div>
      </FaqContainer>
    </Layout>
  );
};

export default FaqPage;
