import React from "react";
import styles from "./MenuOverlay.module.scss";
import { motion, AnimatePresence } from "framer-motion";

const MenuOverlay = ({ overlay, setOverlay }) => {
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
            }}
          >
            Home
          </a>
          <a
            href="#resume"
            className={styles.a}
            onClick={() => {
              setOverlay(false);
            }}
          >
            Resume
          </a>
          <a
            href="#portfolio"
            className={styles.a}
            onClick={() => {
              setOverlay(false);
            }}
          >
            Portfolio
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MenuOverlay;
