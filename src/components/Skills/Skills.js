import React from "react";
import Container from "../Container/Container";
import styles from "./Skills.module.scss";
import { motion } from "framer-motion";

const Skills = ({ color, lines }) => {
  return (
    <div className={styles.wrapper}>
      <Container lines={lines}>
        <div className={styles.container}>
          <h2 className={styles.h2}>Other Skills</h2>
          <div className={styles.total}>
            <div className={styles.cont}>
              <p className={styles.p}>Microsoft Office</p>
              <div className={styles.ballCont}>
                <motion.span
                  className={styles.ball}
                  whileInView={{ backgroundColor: color }}
                  transition={{ duration: 0.4 }}
                ></motion.span>
                <motion.span
                  className={styles.ball}
                  whileInView={{ backgroundColor: color }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                ></motion.span>
                <motion.span
                  className={styles.ball}
                  whileInView={{ backgroundColor: color }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                ></motion.span>
                <motion.span
                  className={styles.ball}
                  whileInView={{ backgroundColor: color }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                ></motion.span>
                <motion.span
                  className={styles.ball}
                  whileInView={{ backgroundColor: color }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                ></motion.span>
                <span className={styles.ball}></span>
                <span className={styles.ball}></span>
                <span className={styles.ball}></span>
                <span className={styles.ball}></span>
                <span className={styles.ball}></span>
              </div>
            </div>
            <div className={styles.cont}>
              <p className={styles.p}>Photoshop</p>
              <div className={styles.ballCont}>
                <motion.span
                  className={styles.ball}
                  whileInView={{ backgroundColor: color }}
                  transition={{ duration: 0.4 }}
                ></motion.span>
                <motion.span
                  className={styles.ball}
                  whileInView={{ backgroundColor: color }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                ></motion.span>
                <motion.span
                  className={styles.ball}
                  whileInView={{ backgroundColor: color }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                ></motion.span>
                <motion.span
                  className={styles.ball}
                  whileInView={{ backgroundColor: color }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                ></motion.span>
                <motion.span
                  className={styles.ball}
                  whileInView={{ backgroundColor: color }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                ></motion.span>
                <motion.span
                  className={styles.ball}
                  whileInView={{ backgroundColor: color }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                ></motion.span>
                <motion.span
                  className={styles.ball}
                  whileInView={{ backgroundColor: color }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                ></motion.span>
                <span className={styles.ball}></span>
                <span className={styles.ball}></span>
                <span className={styles.ball}></span>
              </div>
            </div>
            <div className={styles.cont}>
              <p className={styles.p}>Piano</p>
              <div className={styles.ballCont}>
                <motion.span
                  className={styles.ball}
                  whileInView={{ backgroundColor: color }}
                  transition={{ duration: 0.4 }}
                ></motion.span>
                <motion.span
                  className={styles.ball}
                  whileInView={{ backgroundColor: color }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                ></motion.span>
                <motion.span
                  className={styles.ball}
                  whileInView={{ backgroundColor: color }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                ></motion.span>
                <motion.span
                  className={styles.ball}
                  whileInView={{ backgroundColor: color }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                ></motion.span>
                <motion.span
                  className={styles.ball}
                  whileInView={{ backgroundColor: color }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                ></motion.span>
                <motion.span
                  className={styles.ball}
                  whileInView={{ backgroundColor: color }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                ></motion.span>
                <span className={styles.ball}></span>
                <span className={styles.ball}></span>
                <span className={styles.ball}></span>
                <span className={styles.ball}></span>
              </div>
            </div>{" "}
            <div className={styles.cont}>
              <p className={styles.p}>Premiere Pro</p>
              <div className={styles.ballCont}>
                <motion.span
                  className={styles.ball}
                  whileInView={{ backgroundColor: color }}
                  transition={{ duration: 0.4 }}
                ></motion.span>
                <motion.span
                  className={styles.ball}
                  whileInView={{ backgroundColor: color }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                ></motion.span>
                <motion.span
                  className={styles.ball}
                  whileInView={{ backgroundColor: color }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                ></motion.span>
                <motion.span
                  className={styles.ball}
                  whileInView={{ backgroundColor: color }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                ></motion.span>
                <motion.span
                  className={styles.ball}
                  whileInView={{ backgroundColor: color }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                ></motion.span>
                <motion.span
                  className={styles.ball}
                  whileInView={{ backgroundColor: color }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                ></motion.span>
                <span className={styles.ball}></span>
                <span className={styles.ball}></span>
                <span className={styles.ball}></span>
                <span className={styles.ball}></span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Skills;
