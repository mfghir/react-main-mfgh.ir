import React, { useState } from "react";
import { i18n } from "./i18n";
import Layout from "./components/Layout";

const App = () => {
  const [language, setLanguage] = useState("fa");
  const handleOnclick = (e) => {
    e.preventDefault();
    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  const changeLangStyle = {
    textAlign: language === "fa" ? "right" : "left",
    fontFamily:
      language === "fa"
        ? "'Noto Sans Arabic', sans-serif"
        : "'Quicksand', sans-serif , 'Nanum Gothic', sans-serif",
    // flexFlow: languageChange === "fa" ? "row-reverse" : "",
  };

  return (
    <div className="App">
      <Layout style={changeLangStyle} handleOnclick={handleOnclick} />
    </div>
  );
};

export default App;
