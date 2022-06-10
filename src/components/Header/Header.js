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
        <motion.div
          className={styles.h2}
          initial={{ width: "auto" }}
          animate={{ width: "0%" }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        >
          <h2>I develope websites</h2>
          <h2>farhad faraji</h2>
        </motion.div>

        <h1>
          Hello, I’m <strong style={{ color: color }}>Farhad Faraji</strong>,
          Web Developer, Game Designer,
          <br />
          Music Producer & Audio Engineer.
        </h1>
      </Container>
    </div>
  );
};

export default Header;
