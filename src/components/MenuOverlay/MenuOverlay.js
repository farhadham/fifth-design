import React from "react";
import styles from "./MenuOverlay.module.scss";
import { motion, AnimatePresence } from "framer-motion";

const MenuOverlay = ({ overlay, setOverlay, setBurgerOn }) => {
  return (
    <AnimatePresence>
      {overlay && (
        <motion.div
          className={styles.wrapper}
          initial={{ y: 10, opacity: "0%" }}
          animate={{ y: 0, opacity: "100%" }}
          transition={{ duration: 0.3 }}
        >
          <a
            href="#header"
            className={styles.a}
            style={{ marginTop: "100px" }}
            onClick={() => {
              setOverlay(false);
              setBurgerOn(false);
            }}
          >
            Home
          </a>
          <a
            href="#resume"
            className={styles.a}
            onClick={() => {
              setOverlay(false);
              setBurgerOn(false);
            }}
          >
            Resume
          </a>
          <a
            href="#portfolio"
            className={styles.a}
            onClick={() => {
              setOverlay(false);
              setBurgerOn(false);
            }}
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className={styles.a}
            onClick={() => {
              setOverlay(false);
              setBurgerOn(false);
            }}
          >
            Contact
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MenuOverlay;
