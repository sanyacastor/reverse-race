import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

const Container = styled.section`
  max-width: 100vw;
  min-height: 100vh;
  background: black;
  color: white;
  padding: 54px 41px;
  padding-right: 110px;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: var(--font-size-m);
  line-height: 118%;
  text-transform: uppercase;

  & a {
    color: var(--sucess-color);
    &:hover,
    &:focus {
      color: white;
    }
  }
`;

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Страница не найдена" />
    <Container>
      <h1>NOT FOUND</h1>
      <p>Этой страницы не существует или она была удалена.</p>
      <Link to="/">на главную</Link>
    </Container>
  </Layout>
);

export default NotFoundPage;
