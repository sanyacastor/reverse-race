import React, { useState } from "react";
import { navigate, Link } from "gatsby";
import { motion, AnimatePresence } from "framer-motion";

import Layout from "../components/layout";
import CrossButton from "../components/crossButton";
import RegistrationForm from "../components/form.js";
import Button from "../components/button";

import SEO from "../components/seo";
import TermsOfUse from "../components/TermsOfUse.js";

const RegistrationPage = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };

  return (
    <Layout>
      <SEO title='Регистрация на гонку' />
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: -100}}
          animate={{ opacity: 1, y: 0}}
          exit={{ opacity: 0, y: 0, y: -100}}
          transition={{ duration: .2 }}
        >
          <CrossButton action={() => navigate("/")} />
          <RegistrationForm setVisible={showModal} />
          <Link to='/#faq' style={{ textDecoration: "none" }}>
            <Button caption='FAQ' invert={true} p={0.1} />
          </Link>
          {visible && <TermsOfUse close={closeModal} />}
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
};

export default RegistrationPage;
