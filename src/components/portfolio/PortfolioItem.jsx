import styles from "./Portfolio.module.css";
import { motion } from "framer-motion";
import { AiFillEye, AiFillGithub } from "react-icons/ai";

const PortfolioItem = ({ filterWork }) => {

  

  return (
    <div className={styles.portfolioItem}>
      {filterWork?.map((item) => {
        return (
          <motion.div
            layout
            animate={{ opacity: 1, scale: 1, transform: "none" }}
            initial={{ opacity: 0, scale: 0, transform: "none" }}
            exit={{ opacity: 0, scale: 0, transform: "none" }}
            transition={{ duration: 0.5 }}
            className={styles.portfolioItem}
            key={item.id}
          >
            <div>
              <img src={item.imgUrl} alt={item.title} />
              <ul>
                <li>
                  <a href={item.gitLink} target="_blank" rel="noreferrer">
                    <AiFillGithub />
                  </a>
                </li>
                <li>
                  <a href={item.netlifyLink} target="_blank" rel="noreferrer">
                    <AiFillEye />
                  </a>
                </li>

                <p>{item.description}</p>
              </ul>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default PortfolioItem;
