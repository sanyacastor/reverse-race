import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--main-color);
`;

const RegistrationLink = styled(Link)`
  color: var(--secondary-color);
  font-size: var(--font-size-s);
  text-transform: uppercase;
  text-decoration: none;
  line-height: 120%;
  font-family: "Montserrat", sans-serif;
  font-weight: 900;

`

const IndexPage = () => (
  <Layout>
    <Container>
      <SEO title="Home" />
      <RegistrationLink to="/registration/">Регистрация на гонку</RegistrationLink>
    </Container>
  </Layout>
);

export default IndexPage;
