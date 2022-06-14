import React from "react";
import Container from "../Container/Container";
import styles from "./Language.module.scss";
import { motion } from "framer-motion";

const Language = ({ color, lines }) => {
  return (
    <div className={styles.wrapper} id="resume">
      <Container lines={lines}>
        <div className={styles.container}>
          <h2 className={styles.h2}>Language Skills</h2>
          <div className={styles.total}>
            <p className={styles.p}>English</p>
            <div className={styles.bar}>
              <motion.div
                className={styles.progress}
                style={{ backgroundColor: color }}
                initial={{ width: "0%" }}
                whileInView={{ width: "90%" }}
                transition={{ duration: 0.7 }}
              ></motion.div>
            </div>
            <p className={styles.p}>Turkish</p>
            <div className={styles.bar}>
              <motion.div
                className={styles.progress}
                style={{ backgroundColor: color }}
                initial={{ width: "0%" }}
                whileInView={{ width: "80%" }}
                transition={{ duration: 0.7 }}
              ></motion.div>
            </div>
            <p className={styles.p}>Persian</p>
            <div className={styles.bar}>
              <motion.div
                className={styles.progress}
                style={{ backgroundColor: color }}
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.7 }}
              ></motion.div>
            </div>
            <p className={styles.p}>Azeri</p>
            <div className={styles.bar}>
              <motion.div
                className={styles.progress}
                style={{ backgroundColor: color }}
                initial={{ width: "0%" }}
                whileInView={{ width: "60%" }}
                transition={{ duration: 0.7 }}
              ></motion.div>
            </div>
            <p className={styles.p}>Arabic</p>
            <div className={styles.bar}>
              <motion.div
                className={styles.progress}
                style={{ backgroundColor: color }}
                initial={{ width: "0%" }}
                whileInView={{ width: "10%" }}
                transition={{ duration: 0.7 }}
              ></motion.div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Language;
