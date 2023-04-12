import React, { useState } from "react";
import styles from "./Portfolio.module.css";
import { t } from "i18next";

import { motion } from "framer-motion";
import FilterBtn from "./FilterBtn";
import PortfolioItem from "./PortfolioItem";

import { useQuery } from "react-query";
import Loading from "../../common/Loading";

const Portfolio = () => {
  const { data, isLoading, isError, error } = useQuery("portfolios", () =>
    fetch("https://fatemeweb-api.vercel.app/PortfoliosData").then(
      (res) => res.json()
    )
  );

  // const [works] = useState(data);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");

  if (isLoading) return <Loading />

  if (isError) return <div>Error: {error.message}</div>;

  return (
    <motion.div
      // layout
      initial={{ opacity: 0, transform: "translateX(-50%)" }}
      animate={{ opacity: 1, transform: "translateX(0%)" }}
      exit={{ opacity: 0, transform: "translateX(0%)" }}
      transition={{ duration: 0.8 }}
      className={`portfolio ${styles.portfolio}`}
    >
      <div>
        <h1>{t("portfolios")}</h1>

        <div>
          <FilterBtn
            // works={works}
            setFilterWork={setFilterWork}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />

          <PortfolioItem filterWork={filterWork} />
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
