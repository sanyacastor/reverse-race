import React from "react";
import { navigate } from "gatsby";
import SEO from "../components/seo";
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
      font-size: 8.5px;
      line-height: 9px;
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
    font-size: 7px;
    padding-right: 14px;
    line-height: 9px;

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
    font-size: 8.5px;
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
    font-size: 7px;
    line-height: 9px;
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
    font-size: 125px;
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
      <SEO title="Camp" />
      <FaqContainer id="faq">
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
            Ждем всех на берегу озера Ельчинское (Приозерском район,
            Ленинградская область) с 21 по 23 августа.
          </Heading>
          <Text>
            <a
              href="https://goo.gl/maps/xngucEcUnJoE9gfKA"
              target="blank"
              style={{ display: "inline-block" }}
            >
              Координаты
            </a>{" "}
            главной поляны (включите слой “спутник”). Для размещения, установки
            палаток можно использовать как основную поляну, так и маленькие
            поляны с южной стороны озера.
          </Text>
          <Heading>
            Как добраться:
            <br />
            На электричке:
          </Heading>
          <Text>
            От Финляндского вокзала до станции “пл. 79км” или “Сосново”, далее
            двигаетесь на Раздолье и заезжаете в лагерь пересекая трассу
            “Сортавала”. Для тех, кто помнит старт 2019 года, по расстоянию это
            дальше, примерно на 4км.
          </Text>
          <Heading>Обратите внимание!</Heading>
          <Text>
            При планировании приезда в день гонки 22 августа, вам подходит
            единственная электричка N6505 “Финляндский вокзал – Сосново”,
            отправляющаяся в 6:16 утра. На более поздней электричке вы
            однозначно не успеете приехать вовремя к старту!
          </Text>
          <Heading>На автомобиле:</Heading>
          <Text>
            Заезд в лагерь – через пос. “Раздолье”. Дорога грунтовая, хорошо
            укатанная. Последний километр – хуже, но все легко проезжаемо. Для
            тех, кто помнит старт 2019 года, по расстоянию это дальше, примерно
            на 4км.
          </Text>
          <Heading>На такси:</Heading>
          <Text>
            От Сосново можно взять такси и доехать до “Раздолья”, а может даже и
            до самого лагеря, как договоритесь с водителем.
          </Text>
          <Heading>На велосипеде:</Heading>
          <Text>
            <a
              href="https://www.strava.com/routes/19420912"
              target="blank"
              style={{ display: "inline-block" }}
            >
              {" "}
              Грунтами
            </a>
          </Text>
          <Heading>Дополнительная информация:</Heading>
          <Text>
            Ближайший продуктовый магазин от лагеря находится в пос. “Раздолье”,
            это около 7км.
          </Text>
          <Text>
            На поляне будет возможность за деньги подкрепиться вкусными
            хот-догами, мисосупом, кукурузой на гриле, пловом и другими
            явствами, одним словом будет хорошая кухня от команды Василия
            Баканова. Выпить фильтр или попробовать альтернативные заварки кофе
            поможет кооператив{" "}
            <a
              className="simple"
              href="https://www.instagram.com/virage_cooperative/"
              target="blank"
            >
              “Вираж”
            </a>
            . <br />
            Пивоварня{" "}
            <a
              className="simple"
              href="http://paradox-brewery.ru/"
              target="blank"
            >
              “Paradox”
            </a>{" "}
            организует святое место, где будет разливаться наше коллаборационное
            пиво и несколько других сортов пива и сидра. На поляне плохо ловит
            интернет, берите с собой наличные.
          </Text>
          <Text>
            На озере берите сап-серф за донейшн от прекрасной семейной пары
            фиксеров Лизы и Вити.
          </Text>
          <Text>
            Разводите костры в отведенных для этого зонах, либо используйте
            мангал в качестве очага. Не оставляйте после себя марсианские
            пейзажи. Если хотите подогреть еду рядом с палаткой, воспользуйтесь
            горелкой.
          </Text>
          <Text>
            Как и в прошлом году, в лагере будет введен режим тишины в ночь с 21
            на 22 августа в 0:00, а это значит, что никаких шумных посиделок,
            песен, криков и оров после этого момента. Уважайте соседей, дайте
            возможность выспаться окружающим и приберегите силы на утро. Кутить
            будем на следующий день.
          </Text>
          <Heading>Мусорный вопрос:</Heading>
          <Text>
            Поляна должна остаться после нас такой же чистой, как и была.
            Увезите с собой весь мусор. Не используйте стеклянные бутылки,
            сминайте банки перед тем, как выбросить в мусорный мешок.
            Используйте одноразовую бумажную посуду. Бычки кидайте в костер. Мы
            со своей организаторской стороны приложили максимум усилий, чтобы
            минимизировать количество пластика и другого мусора, сделайте то же
            самое. И еще блять, для меня всегда остается загадкой, какого хера
            некоторые индивиды могут по пять раз сгонять в магазин за догонкой и
            потом ныть, что им на велике сложно мусор вывезти. Берите блять
            ровно столько, сколько способны прибрать за собой. Мусор – это не
            чья-то размытая обязанность, это личная ответственность каждого, кто
            приехал!
          </Text>
          <Heading>Гигиенические вопросы:</Heading>
          <Text>
            В месте лагеря мы построим три санитарных зоны класса люкс: с
            санитайзерами, туалетной бумагой и арома диффузорами внутри.
            Смывайте за собой и следите за чистотой в этих сакральных местах.
          </Text>
          <Text>
            За свежестью и чистотой бегите в озеро. Но помните о природе,
            используйте натуральные средства, чтобы меньше загрязнять воду.
          </Text>
          <Heading>Парковка:</Heading>
          <Text>
            Мы не разрешаем ставить автомобили рядом с палатками на основной
            поляне. Для стоянки машин на расстоянии около 1 км от лагеря мы
            разметим парковочную зону с ограниченным количеством мест. Будьте
            готовы прогуляться до своего любимого транспортного средства.
          </Text>
          <Header2>line-up</Header2>
          <Heading>21 августа</Heading>
          <Text>
            14:00 – Начало регистрации <br />
            21:00 – Hello world
            <br />
            21:30 – Презентация пива, сваренного в коллаборации между{" "}
            <a
              className="simple"
              href="http://paradox-brewery.ru/"
              target="blank"
            >
              “Paradox”
            </a>{" "}
            и “Reverse Side of the Road”. Разговор с главным пивоваром “Paradox”
            – Владимиром Наумкиным
            <br /> 21:45 – Разговор с Дмитрием Нечаевым из{" "}
            <a
              className="simple"
              href="http://tritonbikes.com/ru/"
              target="blank"
            >
              “Тритон Байкс”
            </a>
            <br />
            22:00 – Разговор с{" "}
            <a className="simple" href="http://goshaorekhov.com" target="blank">
              Гошей Ореховым
            </a>{" "}
            и презентация нашей коллаборации
            <br />
            22:15 – Разговор с Максимом Кравцовым про кооператив “Вираж”
            <br />
            22:30 – Разговор с Владимиром Птичниковым из{" "}
            <a
              className="simple"
              href="http://russianraketa.com"
              target="blank"
            >
              “Ракета”
            </a>{" "}
            и презентация нашей коллаборации
            <br />
            22:45 – Разговор с Дмитрием Поповым о{" "}
            <a
              className="simple"
              href="https://www.instagram.com/grishkagear/"
              target="blank"
            >
              “Гришка Гир”
            </a>{" "}
            и байкпакинге
            <br />
            23:00 – Конец регистрации на этот день
            <br />
            22:45 – S. Friedt (Ambient, Dub)
            <br />
            23:20 – Shrooms (Dub techno)
            <br />
            00:00 – ОТБОЙ
          </Text>
          <Heading>22 августа</Heading>
          <Text>
            7:00 – Подъем <br />
            7:00 – Выдача номеров
            <br />
            9:00 – Брифинг
            <br />
            9:30 – Выезд на место старта (5км от лагеря)
            <br />
            10:00 (+20 минут на тупеж наверное) – ГОНКА <br />
            21:00 – Награждение и пока
            <br />
            22:00 – R.A.W.S.
            <br />
            22:45 – Special guest <br />
            23:30 – Renks (Cool music)
            <br />
            Solid Angle (More cool music)
            <br />
            E.Gest (Liquid Drum & Base)
            <br />
            Ptzoid (Live Electro)
          </Text>
          <Heading>23 августа</Heading>
          <Text>Уборка и по домам.</Text>
          <Heading style={{ marginBottom: "2.2em" }}>
            конец августа 2020 по лето 2021 – воспоминания
          </Heading>
          <Header2>
            Трек <span className="desktop_only track">трассы</span>
          </Header2>
          <DownloadLink>
            <a href="https://www.komoot.com/tour/209550872" target="blank">
              73км
            </a>
          </DownloadLink>
          <a href="/gpx/ReverseS.gpx" target="blank" download>
            скачать
          </a>
          <br />
          <DownloadLink style={{ marginBottom: "1.2em" }}>
            <a href="https://www.komoot.com/tour/226519873" target="blank">
              143км
            </a>
          </DownloadLink>
          <a href="/gpx/ReverseB.gpx" target="blank" download>
            скачать
          </a>
          <Heading>В сухих цифрах:</Heading>
          <Text>
            <Accent>Большой круг – 143км</Accent> и 1200м набора.
            <br />
            <Accent>Малый круг – 73км,</Accent> на 70% идет по одному маршруту с
            большим.
          </Text>
          <Text>
            22 августа в 9:00 на основной поляне проведём бриф. После мы проедем
            5км от лагеря до всеми любимого поля. Путь от лагеря до места старта
            – отличная возможность разогреть ноги перед началом. Старт гонки
            произведем с поля в 10 утра. Зрителям рекомендуем не слушать
            брифинг, а сразу идти к месту старта.
          </Text>
          <Text>
            На всех маршрутах вас ждут быстрые грунтовые дороги, непростые
            подъемы, техничные песчаные участки и захватывающие спуски. Два
            недлинных, но изматывающих сегмента. Первый придется на оба
            маршрута, на нем вы обязательно промочите ноги и вспомните недобрым
            словом автора трассы. Можно лавировать между луж и оббегать их с
            краю, но кто вы такие, чтобы боятся воды?
          </Text>
          <Text>
            Сразу после него, на отметке 49км, находится развилка, если к этому
            моменту вы поняли, что зря подписались на большой круг, смело берите
            правее, только не забудьте сообщить на финише, что проехали малую
            дистанцию.
          </Text>
          <Text>
            Свернув на большой круг вас ждет скоростная широкая грунтовая дорога
            вдоль красивейших полей, тысяча мелких ямок, забирающих все силы. И
            снова леса, подъемы, спуски, только вы, природа и ваша выносливость.
            Ближе к концу трассы будет шанс освежить ноги, пересекая брод.
          </Text>
          <Text>
            Если пройдет сильный дождь, трасса может сильно преобразиться и наше
            описание станет бессмысленным, а ваше приключение беспощадным.
          </Text>
          <Text>
            Финиш обеих дистанций прямо у нашего лагеря, не нужно никуда идти,
            можно сразу валиться на землю.
          </Text>
          <Text>
            На трассе организованы три пункта питания для большого круга и один
            для малого. Первый пункт общий для обоих маршрутов. Здесь вы можете
            пополнить запас воды во флягах и углеводов в теле. На всех пунктах
            питания есть аптечки, насосы и ремнаборы с камерами для ваших
            велосипедов.
          </Text>
          <Text>
            <Accent>1 пункт питания</Accent> – общий для двух трасс, на 43км в
            Кировском.
            <br />
            <Accent>2 пункт питания</Accent> – 76км трассы, найдёте его сразу
            после изнурительного ямочного куска.
            <br />
            <Accent>3 пункт питания</Accent> – 109км маршрута.Осторожнее
            выезжайте с пункта питания, там пересечение с шоссе.
          </Text>
          <Text>
            Трасса в нескольких местах пересекает автодороги. Пожалуйста,
            сбавляйте скорость, смотрите по сторонам и выезжайте на дорогу с
            осторожностью. Осторожнее в закрытых поворотах, грунтовые и лесные
            дороги не лишены машин.
          </Text>
          <Text>
            Многие крутые спуски могут оканчиваться песком, камнями и узким
            проездом, будьте аккуратны.
          </Text>
          <Text>
            Если при попытке преодолеть большую дистанцию, вы поняли, что все,
            дальше бороться бессмысленно, то сойти удобнее всего будет на 59км в
            районе “Золотой Долины”, немного передохнув, оттуда вы достаточно
            быстро доберетесь до лагеря по хорошему асфальту. После второго
            пункта питания, через 2 км, будет ещё одна точка схода: шоссе, по
            которому вы без приключений доберётесь до лагеря.
          </Text>
          <Text>
            Если с вами случилось что-то серьезное и вы не можете добраться до
            цивилизации, то звоните нам. Но, пожалуйста, не надо этого делать,
            если вы просто устали. Наши номера будут написаны на карте
            участника.
          </Text>
          <Text>
            Если вы пробились и не взяли с собой запасную камеру, поздравляем.
            Идите пешком до ближайшего пункта питания, возможно, там вам
            помогут. Гут. Дальнейшее попадание в лагерь уже ваша забота и ваша
            личная ответственность. Мы вас конечно не бросим, но забрать сможем
            по мере возможностей.
          </Text>
          <Text>
            <Accent>P.S.</Accent> Там будет место, где вероятнее всего будет
            сильнейшая вонь, вы такого еще не нюхали, если повезет, внукам
            рассказывать будете, обещаем.
          </Text>
        </div>
      </FaqContainer>
    </Layout>
  );
};

export default FaqPage;
