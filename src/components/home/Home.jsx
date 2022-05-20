import React from "react";
import { img } from "../../assets";
import styles from "./home.module.css";

import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { t } from "i18next";

const Home = () => {
  return (
    // <motion.div
    // layout
    // initial={{ width: "50%", position: "absolute", top: 0, left: 0 }}
    // animate={{ width: "50%", position: "none" }}
    // exit={{ width: "50%", position: "none" }}
    // transition={{ duration: 0.8 }}
    // >
    <div className={styles.home}>
      <img src={img.homeBg} alt="home" />

      <h1>
        <Typewriter
          onInit={(typewriter) => {
            typewriter.pauseFor(2500).deleteAll().start();
          }}
          options={{
            strings: ["Web Developer", "Front-end"],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>

      <ul>
        <li>
          <span>{t("age")}:</span> 24
        </li>
        <li>
          <span>{t("dob")}:</span> {t("dobA")}
        </li>
        <li>
          <span>{t("address")}:</span> {t("addressA")}
        </li>
      </ul>
    </div>
    // </motion.div>
  );
};

export default Home;
