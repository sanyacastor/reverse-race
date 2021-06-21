import React, { useState } from "react";
import { navigate, Link } from "gatsby";
import { motion, AnimatePresence } from "framer-motion";

import Layout from "../components/layout";
import RegistrationForm from "../components/form.js";
import Button from "../components/button";
import Header from "../components/header";
import CrossButton from "../components/crossButton";

import FirstStep from "../components/firstStep";

import SEO from "../components/seo";
import TermsOfUse from "../components/TermsOfUse.js";

const RegistrationPage = () => {
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState(1);
  const [pack, setPack] = useState();

  const showModal = () => {
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };

  const goToStep = (n) => {
    setStep(n);
  };

  return (
    <Layout>
      <SEO title="Регистрация на гонку" />
      <Header />
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.2 }}
        >
          {step === 1 && (
            <FirstStep
              nextStepHandler={() => goToStep(2)}
              updateHandler={(p) => setPack(p)}
            />
          )}
          {step === 2 && (
            <>
              <CrossButton action={() => navigate("/")} />
              <RegistrationForm setVisible={showModal} userPack={pack} />
              <Link to="/#faq" style={{ textDecoration: "none" }}>
                <Button caption="FAQ" invert={true} p={0.1} />
              </Link>
            </>
          )}
          {visible && <TermsOfUse close={closeModal} />}
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
};

export default RegistrationPage;
