import { BsGeoAlt, BsEnvelope, BsTelephone } from "react-icons/bs";
import styles from "./Contact.module.css";
import { motion } from "framer-motion";

import Form from "../../common/Form";
import { t } from "i18next";
import zigzag from "../../assets/icons/zigzag.svg";

const Contact = () => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, transform: "translateY(100%)" }}
      animate={{ opacity: 1, transform: "translateY(0%)" }}
      exit={{ opacity: 0, transform: "translateY(0%)" }}
      transition={{ duration: 0.8 }}
      className={`contact ${styles.contact}`}
    >
      {/* <div className={styles.contact}> */}
      <h1>{t("contactTwo")}</h1>

      <section className={styles.contactSec}>
        <div className="title">
          <h4>{t("getInTouch")}</h4>
          <img src={zigzag} alt="zigzag" />
        </div>

        <div className={styles.contactDiv}>
          <div className={styles.fm}>
            <div>
              <BsGeoAlt />
              <span>{t("findMe")}</span>
              <p>{t("teharnIran")}</p>
            </div>

            <div>
              <BsEnvelope />
              <span>{t("mailMe")}</span>
              <p>fatemeghafari77[@]gmail.com</p>
            </div>

            <div>
              <BsTelephone />
              <span>{t("callMe")}</span>
              <p>{t("phoneNum")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.formSec}>
        <div className="title">
          <h4>{t("contactForm")}</h4>
          <img src={zigzag} alt="zig-zag" />
        </div>

        <Form />
      </section>
      {/* </div> */}
    </motion.div>
  );
};

export default Contact;
