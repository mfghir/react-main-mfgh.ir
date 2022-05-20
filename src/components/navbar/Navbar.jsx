import React, { useState } from "react";
import { Link } from "react-router-dom";
import { t } from "i18next";

import { img } from "../../assets";
import "./nav.css";
import styled from "styled-components";
import styles from "./Navbar.module.css";

import { ImCodepen } from "react-icons/im";
import { ImLinkedin2 } from "react-icons/im";
import { BsGithub } from "react-icons/bs";

import { BsTelegram } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { useMediaQuery } from "react-responsive";

import { motion } from "framer-motion";

const Navbar = ({ handleOnclick, style, location }) => {
  const [open, setOpen] = useState(false);

  const openMenu1 = {
    transform: open ? " rotate(45deg)" : " rotate(0)",
  };
  const openMenu2 = {
    transform: open ? "translateX(-100%)" : "translateX(0)",
    opacity: open ? 0 : 1,
  };
  const openMenu3 = {
    transform: open ? " rotate(-45deg)" : " rotate(0)",
  };

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 993px)",
  });

  return (
    <section>
      <div className={styles.menuTM}>
        <img src={img.logo} alt="logo" />
        <ul onClick={() => setOpen(!open)}>
          <li style={openMenu1}></li>
          <li style={openMenu2}></li>
          <li style={openMenu3}></li>
        </ul>
      </div>

      {/* <motion.div
          layout
          initial={{ right: 0 ,transition : '1s' }}
          animate={{ right: "75%",transition : '1s'  }}
          exit={{ right: "75%",transition : '1s'  }}
          // initial={false}
          transition={{ duration: 0.8 }}
        > */}
      <Show open={open}>
        {isDesktopOrLaptop ? (
          <nav
            style={style}
            open={open}
            location={location.pathname}
            className={`nav ${
              location.pathname === "/" ? "cssRight" : "cssLeft"
            }`}
          >
            <figure className={styles.profile}>
              <img src={img.avatar} alt="profile" />
            </figure>
            <h2>{t("name")}</h2>

            <ul className={styles.socials}>
              <li>
                <a href="https://t.me/mfghir" target="_blank" rel="noreferrer">
                  <BsTelegram />
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/mfgh.ir/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsInstagram />
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/fateme-ghafari"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ImLinkedin2 />
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/mfghir"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://codepen.io/miss_f_g/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ImCodepen />
                </a>
              </li>
            </ul>

            <ul className={styles.menu}>
              <li>
                <Link to="/">{t("home")}</Link>
              </li>
              <li>
                <Link to="/aboutme">{t("aboutme")}</Link>
              </li>

              <li>
                <Link to="/resume">{t("resume")}</Link>
              </li>
              <li>
                <Link to="/portfolios">{t("portfolios")}</Link>
              </li>
              <li>
                <Link to="/contact">{t("contact")}</Link>
              </li>
            </ul>

            <div className={styles.btns}>
              <button value="fa" onClick={handleOnclick} />
              <button value="en" onClick={handleOnclick} />
              <button value="ko" onClick={handleOnclick} />
            </div>
          </nav>
        ) : (
          <nav
            style={style}
            open={open}
            location={location.pathname}
            className={styles.nav}
          >
            <figure className={styles.profile}>
              <img src={img.avatar} alt="profile" />
            </figure>
            <h2>{t("name")}</h2>

            <ul className={styles.socials}>
              <li>
                <a href="https://t.me/mfghir" target="_blank" rel="noreferrer">
                  <BsTelegram />
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/mfgh.ir/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsInstagram />
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/fateme-ghafari"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ImLinkedin2 />
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/mfghir"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://codepen.io/miss_f_g/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ImCodepen />
                </a>
              </li>
            </ul>

            <ul className={styles.menu}>
              <li>
                <Link to="/">{t("home")}</Link>
              </li>
              <li>
                <Link to="/aboutme">{t("aboutme")}</Link>
              </li>

              <li>
                <Link to="/resume">{t("resume")}</Link>
              </li>
              <li>
                <Link to="/portfolios">{t("portfolios")}</Link>
              </li>
              <li>
                <Link to="/contact">{t("contact")}</Link>
              </li>
            </ul>

            <div className={styles.btns}>
              <button value="fa" onClick={handleOnclick}></button>
              <button value="en" onClick={handleOnclick}></button>
              <button value="ko" onClick={handleOnclick}></button>
            </div>
          </nav>
        )}
      </Show>
      {/* </motion.div> */}
    </section>
  );
};

export default Navbar;

const Show = styled.div`
  @media (max-width: 768px) {
    nav {
      right: ${(props) => (props.open ? "0" : "-305px")};
    }
  }
`;
