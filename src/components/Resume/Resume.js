import React, { useState } from "react";
import Container from "../Container/Container";
import styles from "./Resume.module.scss";
import { motion } from "framer-motion";

const Resume = ({ color, lines }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className={styles.wrapper} id="resume">
      <Container lines={lines}>
        <div className={styles.container}>
          <h2 className={styles.h2}>About</h2>
          <div className={styles.total}>
            <div className={styles.content}>
              <img src="./images/Farhad-Faraji.jpg" className={styles.img} />
              <div className={styles.text}>
                <p className={styles.aboutText}>
                  Hello! I’m Daniel Curry. Web designer from USA, California,
                  San Francisco. I have rich experience in web site design and
                  building, also I am good at wordpress. I love to talk with you
                  about our unique.
                </p>
                <div className={styles.details}>
                  <p className={styles.p} style={{ color }}>
                    Born <span className={styles.span}>1996</span>
                  </p>
                  <p className={styles.p} style={{ color }}>
                    Residence <span className={styles.span}>Iran/Turkey</span>
                  </p>
                  <p className={styles.p} style={{ color }}>
                    Email
                    <span className={styles.span}> farhadham2@gmail.com </span>
                  </p>
                  <p className={styles.p} style={{ color }}>
                    Phone
                    <span className={styles.span}> +90 (543) 455 21 60</span>
                  </p>
                </div>
              </div>
            </div>

            <motion.button
              style={{ border: `2px solid ${color}` }}
              className={styles.button}
              animate={hovered ? { color: "#000000" } : { color: color }}
              initial={{ color: "#4bffa5" }}
              transition={{ duration: 0.35 }}
              onMouseEnter={() => {
                setHovered(true);
              }}
              onMouseLeave={() => {
                setHovered(false);
              }}
            >
              Download CV
              <motion.div
                style={{ backgroundColor: color }}
                className={styles.fake}
                initial={{ scale: 0 }}
                animate={hovered ? { scale: 1.1 } : { scale: 0 }}
                transition={{ duration: 0.35 }}
              ></motion.div>
            </motion.button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Resume;
