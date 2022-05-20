import React from "react";
import { t } from "i18next";
import { img } from "../../assets";
import styles from "./Contact.module.css";

import { BsGeoAlt } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import {  motion } from "framer-motion";


const Contact = () => {
  return (

    <motion.div
      layout
      initial={{ opacity: 0, transform: "translateY(100%)" }}
      animate={{ opacity: 1, transform: "translateY(0%)" }}
      exit={{ opacity: 0, transform: "translateY(0%)" }}
      transition={{ duration: 0.8 }}
    >
    <div className={styles.contact}>
      <h1>{t("contactTwo")}</h1>

      <section className={styles.contactSec}>
        <h4>{t("getInTouch")}</h4>
        <img src={img.zigzag} alt="zigzag" />

        <div className={styles.contactDiv}>
          {/* <p>{t("getInTouchText")}</p> */}

          <div className={styles.fm}>
            <div>
              <BsGeoAlt />
              <span>{t("findMe")}</span>
              <p>{t("teharnIran")}</p>
            </div>
            <div>
              <BsEnvelope />
              <span>{t("mailMe")}</span>
              {/* <p>{t("emailTwo")}</p> */}
              <p>fatemeghafari77[@]gmail.com</p>
            </div>
            <div>
              <BsTelephone />
              <span>{t("callMe")}</span>
              <p>[+98] 9224585055</p>
            </div>
          </div>
        </div>
      </section>
    </div>

      </motion.div>
  );
};

export default Contact;
