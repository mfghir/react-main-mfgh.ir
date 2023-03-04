import { BsMoon, BsSun } from "react-icons/bs";
import { useState, useEffect } from "react";

const DarkMood = () => {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setTheme(localStorage.getItem("theme"));
      document.documentElement.setAttribute(
        "data-theme",
        localStorage.getItem("theme")
      );
    } else {
      checkTheme(null);
    }
  }, []);

  const checkTheme = () => {
    switch (theme) {
      case "light":
        setTheme("dark");
        localStorage.setItem("theme", "dark");
        return document.documentElement.setAttribute("data-theme", "dark");

      case "dark":
        setTheme("light");
        localStorage.setItem("theme", "light");
        return document.documentElement.setAttribute("data-theme", "light");

      default:
        setTheme("light");
        localStorage.setItem("theme", "light");
        return document.documentElement.setAttribute("data-theme", "light");
    }
  };

  return (
    <div onClick={checkTheme}>
      {theme === "light" ? (
        <BsMoon style={{ cursor: "pointer" }} />
      ) : (
        <BsSun style={{ cursor: "pointer" }} />
      )}
    </div>
  );
};

export default DarkMood;
