import React from "react";
import { ModalRoutingContext } from "gatsby-plugin-modal-routing";
import { Link } from "gatsby";
import styled from "styled-components";

import CrossButton from "../components/crossButton";

const Container = styled.section`
  max-width: 100vw;
  background: var(--main-color);
  color: var(--secondary-color);
  padding: 54px 41px;
  padding-right: 110px;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 19px;
  line-height: 23px;
  color: var(--secondary-color);
  overflow: auto;
`;

const Paragraph = styled.p`
  margin: 0;
  padding: 0;
  margin-bottom: ${({ mb }) => mb && "54px"};
`;

const Header = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 19px;
  line-height: 23px;
  color: var(--secondary-color);
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  margin-bottom: 32px;
`;

const List = styled.ul`
  margin-bottom: 32px;
  margin-left: 25px;

  & li {
    margin: 0;
    padding: 0;
  }
`;

const renderPrivacyPolicy = () => {
  return (
    <>
      <Header>
        СОГЛАСИЕ О передаче персональных данных ПРИ УЧАСТИИ В СОРЕВНОВАНИЯХ
        «Revese side of the road 2020»
      </Header>
      <Paragraph>
        Предоставляя свои персональные данные Покупатель даёт согласие на
        обработку, хранение и использование своих персональных данных на
        основании ФЗ № 152-ФЗ «О персональных данных» от 27.07.2006 г. в
        следующих целях:
      </Paragraph>
      <List>
        <li>Регистрации Пользователя на сайте</li>
        <li>Выполнение Продавцом обязательств перед Покупателем</li>
      </List>
      <Paragraph>
        Под персональными данными подразумевается любая информация личного
        характера, позволяющая установить личность Покупателя такая как:
      </Paragraph>
      <List>
        <li>Фамилия, Имя, Отчество </li>
        <li>Контактный телефон </li>
        <li>Адрес электронной почты </li>
      </List>
      <Paragraph>
        Персональные данные Покупателей хранятся исключительно на электронных
        носителях и обрабатываются с использованием автоматизированных систем,
        за исключением случаев, когда неавтоматизированная обработка
        персональных данных необходима в связи с исполнением требований
        законодательства. Продавец обязуется не передавать полученные
        персональные данные третьим лицам, за исключением следующих случаев:
      </Paragraph>
      <List>
        <li>
          По запросам уполномоченных органов государственной власти РФ только по
          основаниям и в порядке, установленным законодательством РФ
        </li>
        <li>
          Стратегическим партнерам, которые работают с Продавцом для
          предоставления продуктов и услуг, или тем из них, которые помогают
          Продавцу реализовывать продукты и услуги потребителям.
        </li>
      </List>
      <Paragraph mb={3}>
        Мы предоставляем третьим лицам минимальный объем персональных данных,
        необходимый только для оказания требуемой услуги или проведения
        необходимой транзакции. Продавец оставляет за собой право вносить
        изменения в одностороннем порядке в настоящие правила, при условии, что
        изменения не противоречат действующему законодательству РФ. Изменения
        условий настоящих правил вступают в силу после их публикации на Сайте.
      </Paragraph>
      <Header>
        СОГЛАСИЕ ОБ ОТКАЗЕ ОТ ПРЕТЕНЗИЙ ПРИ УЧАСТИИ В СОРЕВНОВАНИЯХ «Revese side
        of the road 2020»
      </Header>
      <Paragraph>
        Я добровольно соглашаюсь на участие в соревнованиях «Revese side of the
        road 2020», проходящее с 21 по 23 августа 2020 г. в Ленинградской
        области (далее – мероприятие), при этом четко и ясно осознаю и принимаю
        следующее:
      </Paragraph>
      <List>
        <li>
          Участие в данном мероприятии является потенциально небезопасным для
          меня, и, несмотря на это, я принимаю все риски участия в нём.
        </li>
        <li>
          Я согласен (а) с тем, что любые травмы, различной степени вреда
          здоровью и любые последствия несчастных случаев, вплоть до летального
          исхода, полученные мной до, во время и после мероприятия, будут
          являться моей личной ответственностью, при этом я добровольно и
          заведомо отказываюсь от каких-либо материальных, моральных и иных
          претензий и требований к организаторам соревнований, владельцам
          собственности, иным лицам, участвующим в мероприятии. Данный отказ от
          претензий и требований распространяется на моих родственников, иных
          лиц, правомочных предъявить такого рода претензии.
        </li>
        <li>
          Я согласен (а) с тем, что моральный, физический, материальный и/или
          иной ущерб, причиненный мне и моей собственности до, во время и после
          мероприятия, а также аналогичного рода ущерб, причиненный по моей вине
          иным лицам либо имуществу иных лиц, будет являться моей личной
          ответственностью.
        </li>
        <li>
          Я обязуюсь следовать всем требованиям организаторов мероприятия,
          связанным с вопросами безопасности, и соблюдать все правила и
          предписания мероприятия.
        </li>
        <li>
          Во время мероприятия я никогда и ни при каких обстоятельствах не буду
          умышленно создавать ситуации, которые могут причинить вред другим
          участникам, организаторам, посторонним лицам, а также их имуществу.
        </li>
        <li>
          Я подтверждаю отсутствие у меня заболеваний, препятствующих участию в
          данном мероприятии. В случае наличия у меня скрытых заболеваний,
          возможные последствия возлагаю на себя в полной мере.
        </li>
        <li>
          У меня отсутствуют симптомы короновирусной инфекции COVID-19, принимаю
          любые возможные риски заражения данной инфекцией, что является моей
          личной ответственностью.
        </li>
        <li>
          Обязуюсь до, во время и после проведения мероприятия соблюдать правила
          гигиены, предписания Роспотребнадзора по противодействию
          распространения Короновирусной инфекции COVID-19
        </li>
        <li>
          В случае невозможности исполнения Организаторами своих обязательств по
          независящим от них обстоятельствам, в том числе по требованию
          государства или третьих лиц по причине причинения вреда здоровью
          населения из-за пандемии COVID-19 или другой пандемии, а также
          обстоятельств непреодолимой силы, Организаторы оставляют за собой
          право переноса мероприятия на более благоприятный для этого срок с
          условием переноса всех приобретенных участников слотов на новую дату.
        </li>
      </List>
    </>
  );
};

const TermsOfUse = () => (
  <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) => (
      <Container>
        <CrossButton to={closeTo} />
        {renderPrivacyPolicy()}
      </Container>
    )}
  </ModalRoutingContext.Consumer>
);

export default TermsOfUse;
