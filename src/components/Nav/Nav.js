import React from "react";
import styles from "./Nav.module.scss";
import { motion } from "framer-motion";

const Nav = ({ setLinkHovered }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div>
          <a
            href=""
            className={`${styles.a}`}
            onMouseEnter={() => {
              setLinkHovered(true);
            }}
            onMouseLeave={() => {
              setLinkHovered(false);
            }}
          >
            <motion.div
              className={styles.cont}
              initial={{ y: 0 }}
              whileHover={{ y: -40 }}
              transition={{ duration: 0.3 }}
            >
              <span className={styles.span}>
                Farhad <strong className={styles.strong}>Faraji</strong>
              </span>
              <span className={styles.span}>
                Farhad <strong className={styles.strong}>Faraji</strong>
              </span>
            </motion.div>
          </a>
        </div>
        <div>
          <a
            href="#header"
            className={`${styles.a}`}
            onMouseEnter={() => {
              setLinkHovered(true);
            }}
            onMouseLeave={() => {
              setLinkHovered(false);
            }}
          >
            <motion.div
              className={styles.cont}
              initial={{ y: 0 }}
              whileHover={{ y: -40, color: "#ffffff" }}
              transition={{ duration: 0.3 }}
            >
              <span className={styles.span}>Home</span>
              <span className={styles.span}>Home</span>
            </motion.div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
