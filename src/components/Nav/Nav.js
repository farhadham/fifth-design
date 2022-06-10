import React, { useState } from "react";
import styles from "./Nav.module.scss";
import { motion } from "framer-motion";

const Nav = () => {
  const [nameHovered, setNameHovered] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <a
          className={`${styles.name} ${styles.a}`}
          onMouseEnter={() => {
            setNameHovered(true);
          }}
          onMouseLeave={() => {
            setNameHovered(false);
          }}
        >
          <motion.div
            className={styles.cont}
            initial={{ y: 0 }}
            animate={nameHovered ? { y: -50 } : { y: 0 }}
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
    </div>
  );
};

export default Nav;
