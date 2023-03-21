import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { t } from "i18next";

import styled from "styled-components";
import styles from "./Navbar.module.css";
import { ImCodepen, ImLinkedin2 } from "react-icons/im";

import { BsGithub, BsTelegram, BsInstagram } from "react-icons/bs";
import { useMediaQuery } from "react-responsive";
import DarkMood from "../../common/DarkMood";

import favIcon from "../../assets/icons/favicon.ico";

const Navbar = ({ handleOnclick, location }) => {
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
    <>
      <div className={`menuTM ${styles.menuTM}`}>
        <img src={favIcon} alt="logo" />
        <ul onClick={() => setOpen(!open)}>
          <li style={openMenu1}></li>
          <li style={openMenu2}></li>
          <li style={openMenu3}></li>
        </ul>
      </div>

      <Show open={open}>
        {isDesktopOrLaptop ? (
          <nav
            open={open}
            location={location.pathname}
            className={`nav ${styles.nav} ${
              location.pathname === "/" ? styles.cssRight : styles.cssLeft
            }`}
          >
            <button className={styles.theme}>
              <DarkMood />
            </button>

            <figure className={styles.profile}>
              <img
                src="https://i.postimg.cc/dt0mXYTx/avatar.jpg"
                alt="profile"
              />
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
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  {t("home")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/aboutme"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  {t("aboutme")}
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/resume"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  {t("resume")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/portfolios"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  {t("portfolios")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  {t("contact")}
                </NavLink>
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
            open={open}
            location={location.pathname}
            className={`nav ${styles.nav}`}
          >
            <button className={styles.theme}>
              <DarkMood />
            </button>

            <figure className={styles.profile}>
              <img
                src="https://i.postimg.cc/dt0mXYTx/avatar.jpg"
                alt="profile"
              />
            </figure>
            <h2>{t("name")}</h2>

            <ul className={styles.socials}>
              <li>
                <a href="https://t.me/fatemeweb" target="_blank" rel="noreferrer">
                  <BsTelegram />
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/fatemeweb/"
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
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  {t("home")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/aboutme"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  {t("aboutme")}
                </NavLink>
              </li>

              <li>
                <Link
                  to="/resume"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  {t("resume")}
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolios"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  {t("portfolios")}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  {t("contact")}
                </Link>
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
    </>
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
