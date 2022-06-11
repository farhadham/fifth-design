import React from "react";
import styles from "./Header.module.scss";
import BackgroundImage from "../BackgroundImage/BackgroundImage.js";
import Container from "../Container/Container";
import { motion } from "framer-motion";

const Header = ({ color, lines }) => {
  return (
    <div className={styles.wrapper} id="header">
      <BackgroundImage />
      <Container lines={lines}>
        <div className={styles.container}>
          <div className={styles.h2}>
            <motion.h2
              animate={{
                y: [-100, 0, 0, 100],
              }}
              transition={{
                duration: 2.5,
                repeatType: "loop",
                repeat: Infinity,
                repeatDelay: 5,
              }}
            >
              I develope <span style={{ color: color }}>websites</span>
            </motion.h2>
          </div>
          <div className={styles.h2}>
            <motion.h2
              animate={{
                y: [-100, 0, 0, 100],
              }}
              transition={{
                duration: 2.5,
                repeatType: "loop",
                repeat: Infinity,
                repeatDelay: 5,
                delay: 2.5,
              }}
            >
              I produce <span style={{ color: color }}>music</span>
            </motion.h2>
          </div>
          <div className={styles.h2}>
            <motion.h2
              animate={{
                y: [-100, 0, 0, 100],
              }}
              transition={{
                duration: 2.5,
                repeatType: "loop",
                repeat: Infinity,
                repeatDelay: 5,
                delay: 5,
              }}
            >
              I develope <span style={{ color: color }}>games</span>
            </motion.h2>
          </div>
          <h1>
            Hello, I’m <strong style={{ color: color }}>Farhad Faraji</strong>,
            Web Developer, Game Designer,
            <br />
            Music Producer & Audio Engineer.
          </h1>
        </div>
      </Container>
    </div>
  );
};

export default Header;
