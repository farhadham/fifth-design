import React from "react";
import Container from "../Container/Container";
import styles from "./Skills.module.scss";
import { motion } from "framer-motion";

const Skills = ({ color, lines }) => {
  return (
    <div className={styles.wrapper} id="resume">
      <Container lines={lines}>
        <div className={styles.container}>
          <h2 className={styles.h2}>Other Skills</h2>
          <div className={styles.total}>
            <div className={styles.cont}>
              <motion.svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.svg}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke={color}
                  stroke-width="5"
                />
              </motion.svg>
              <p className={styles.p}>Graphic Design</p>
            </div>
            <div className={styles.cont}>
              <motion.svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.svg}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <motion.circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke={color}
                  stroke-width="5"
                />
              </motion.svg>
              <p className={styles.p}>Video Editing</p>
            </div>
            <div className={styles.cont}>
              <motion.svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.svg}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke={color}
                  stroke-width="5"
                />
              </motion.svg>
              <p className={styles.p}>Microsoft Office</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Skills;
