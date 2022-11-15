import React from "react";
import "./layout.css";
import { Navigate, Route, Routes, useLocation } from "react-router";

import Portfolio from "./portfolio/Portfolio";
import AboutMe from "./aboutme/AboutMe";
import Contact from "./contact/Contact";

import Resume from "./resume/Resume";
import Home from "./home/Home";
import Navbar from "./navbar/Navbar";

import GoTopButton from "../common/GoTopButton";
import { Background } from "../common/Background";

const Layout = ({ handleOnclick }) => {
  const location = useLocation();

  return (
    <section className="layout-container">
      <Navbar
        handleOnclick={handleOnclick}
        location={location}
        key={location.pathname}
      />

      <Background />

      <div
        className={`layout ${
          location.pathname === "/" ? "layoutRight" : "layoutLeft"
        }`}
      >
        <GoTopButton />

        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolios" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </section>
  );
};

export default Layout;
