import React, { useState } from "react";
import styles from "./Button.module.scss";
import { motion } from "framer-motion";

const Button = ({ color, text }) => {
  const [hovered, setHovered] = useState(false);

  return (
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
      {text}
      <motion.div
        style={{ backgroundColor: color }}
        className={styles.fake}
        initial={{ scale: 0 }}
        animate={hovered ? { scale: 1.1 } : { scale: 0 }}
        transition={{ duration: 0.35 }}
      ></motion.div>
    </motion.button>
  );
};

export default Button;
