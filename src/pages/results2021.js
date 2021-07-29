import React, { useState } from "react";
import styled from "styled-components";
import { navigate } from "gatsby";
import { motion, AnimatePresence } from "framer-motion";

import SEO from "../components/seo";
import Layout from "../components/layout";
import CrossButton from "../components/crossButton";

import JSONMulti from "../JSONData/ResultsMulti21.json";
import JSONAll from "../JSONData/ResultsOther21.json";

const ResultsContainer = styled.section`
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-size: 19px;
  line-height: 23px;
  font-weight: 500;
  color: var(--secondary-color);
  padding-right: 41px;
  padding-left: 35px;
  padding-top: 22px;
  margin-bottom: 28px;

  @media (max-width: 780px) {
    padding-left: 14px;
  }
`;

const Header2 = styled.h2`
  display: block;
  width: 100%;
  margin-left: 0;
  padding-left: 0;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 96px;
  line-height: 106.4%;
  text-transform: uppercase;

  transition: all 0.2s ease-in-out;

  @media (max-width: 780px) {
    font-size: 35px;
    line-height: 33px;
  }
`;

const Header3 = styled.h3`
  display: block;
  width: 100%;
  margin-left: 0;
  padding-left: 0;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 96px;
  line-height: 106.4%;
  text-transform: uppercase;

  transition: all 0.2s ease-in-out;

  @media (max-width: 780px) {
    font-size: 35px;
    line-height: 33px;
  }
`;

const StyledTable = styled.table`
  max-width: 670px;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 23px;
  margin-bottom: 45px;

  & th {
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 19px;
    line-height: 23px;
    text-transform: uppercase;
    padding-bottom: 13px;
    padding-right: 43px;
  }

  @media (max-width: 780px) {
    font-size: 8.5px;
    line-height: 10px;

    & th {
      font-size: 7px;
      line-height: 9px;
      padding-right: 0;
    }
  }

  & td {
    padding-top: 0;
    margin-bottom: 7px;
  }

  & tbody tr:nth-child(1),
  & tbody tr:nth-child(2),
  & tbody tr:nth-child(3) {
    color: var(--sucess-color);
  }

  & tbody tr:nth-child(2) {
    color: ${(props) => props.one && "var(--secondary-color)"};
  }

  & tbody tr:nth-child(3) {
    color: ${(props) => props.two && "var(--secondary-color)"};
  }


`;

const TableHeader = () => (
  <thead>
    <tr>
      <th>Место</th>
      <th>Номер</th>
      <th>Имя</th>
      <th>Время</th>
    </tr>
  </thead>
);

const User = ({ user, index }) => (
  <>
    <td>{index + 1}</td>
    <td>{user.number}</td>
    <td>
      {user.firstName} {user.secondName}
    </td>
    <td>{user.time}</td>
  </>
);

const Category = ({ header, users, two, one }) => {
  return (
    <>
      <Header3>{header}</Header3>
      <StyledTable two={two} one={one}>
        <TableHeader />
        <tbody>
          {users.map((u, i) => (
            <tr key={i}>{<User user={u} index={i} />}</tr>
          ))}
        </tbody>
      </StyledTable>
    </>
  );
};

const ResultsPage = () => {
  const [visible, setVisible] = useState(true);

  const goToHomePage = () => {
    setVisible(false);

    setTimeout(() => {
      navigate("/");
    }, 400);
  };

  return (
    <Layout>
      <CrossButton action={goToHomePage} />
      <SEO title="Results 2021" />
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.4 }}
          >
            <ResultsContainer>
              <Header2>Рeзультаты 2021</Header2>
              <Category header="Мультиспид муж." users={JSONMulti} />
              <Category header="Мультиспид жен." users={JSONAll.multiW} />
              <Category header="Фикс муж." users={JSONAll.fixedM} />
              <Category header="Фикс жен." users={JSONAll.fixedW} one two/>
              <Category header="Cингл муж." users={JSONAll.singleM} />
              <Category header="90км муж." users={JSONAll.smallM} />
              <Category header="90км жен." users={JSONAll.smallW} />
            </ResultsContainer>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default ResultsPage;
