import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./FilterBtn.css";

import { useQuery } from "react-query";
import Loading from "../../common/Loading";

const FilterBtn = ({ setActiveFilter, activeFilter, setFilterWork, works }) => {


  const { data, isLoading, isError, error } = useQuery("portfolios", () =>
    fetch("https://mfghir-personal-web-api.vercel.app/PortfoliosData").then(
      (res) => res.json()
    )
  );


  useEffect(() => {
    if (activeFilter === "All") {
      setFilterWork(data);
      return;
    }
    const filtered = data.filter((item) => item.title.includes(activeFilter));
    setFilterWork(filtered);
  }, [activeFilter, setFilterWork, data]);



  if (isLoading) return <Loading />

  if (isError) return <div>Error: {error.message}</div>;


  return (
    <div className="btns">
      {["All", "Web", "React", "Js"].map((item, index) => (
        <motion.div
          key={index}
          onClick={() => setActiveFilter(item)}
          className={` ${activeFilter === item ? "activeBtn" : ""}`}
        >
          {item}
        </motion.div>
      ))}
    </div>
  );
};

export default FilterBtn;
