import React, { useEffect, useState } from "react";
import styles from "./GoTopButton.module.css";
import { BsChevronUp } from "react-icons/bs";

const GoTopButton = () => {
  const [showGoTop, setShowGoTop] = useState(false);

  const handleVisibleButton = () => {
    setShowGoTop(window.pageYOffset > 1000);
  };

  const handleScrollUp = () => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
  }, []);

  return (
    <button
      type="button"
      className={showGoTop ? styles.goTop : styles.goTopHidden}
      onClick={handleScrollUp}
    >
      <BsChevronUp />
    </button>
  );
};

export default GoTopButton;
