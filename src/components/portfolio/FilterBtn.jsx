import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./FilterBtn.css";

const FilterBtn = ({ setActiveFilter, activeFilter, setFilterWork, works }) => {
  useEffect(() => {
    if (activeFilter === "All") {
      setFilterWork(works);
      return;
    }
    const filtered = works.filter((item) => item.title.includes(activeFilter));
    setFilterWork(filtered);
  }, [activeFilter, setFilterWork, works]);

  return (
    <div className="btns">
      {["All", "Web", "React", "Js"].map((item, index) => (
        <motion.div
          key={index}
          onClick={() => setActiveFilter(item)}
          className={` ${activeFilter === item ? "activeBtn" : ""}`}
          // className={activeFilter === item && <motion.div layoutId="underline" /> }
        >
          {item}
        </motion.div>
      ))}
    </div>
  );
};

export default FilterBtn;
