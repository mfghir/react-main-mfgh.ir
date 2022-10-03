import React from "react";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router";

import Portfolio from "./portfolio/Portfolio";
import AboutMe from "./aboutme/AboutMe";
import Contact from "./contact/Contact";

import Resume from "./resume/Resume";
import Home from "./home/Home";
import Navbar from "./navbar/Navbar";

import NotFound from "./notfound/NotFound";

const Layout = ({ style, handleOnclick }) => {
  const location = useLocation();

  return (
    <>
      <Navbar
        handleOnclick={handleOnclick}
        style={style}
        location={location}
        key={location.pathname}
      />

      <div
        className={`layout ${
          location.pathname === "/" ? "layoutRight" : "layoutLeft"
        }`}
        style={style}
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolios" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default Layout;
