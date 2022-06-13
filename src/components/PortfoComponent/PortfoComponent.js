import React, { useState } from "react";
import styles from "./PortfoComponent.module.scss";
import { motion } from "framer-motion";

const PortfoComponent = ({ description, title, image, color }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className={styles.wrapper}>
      <img
        className={styles.img}
        alt="farhadf.com"
        src={`./images/${image}.jpg`}
      />
      <motion.div
        style={{ backgroundColor: color }}
        className={styles.fakeBg}
        initial={{ scale: 0 }}
        animate={
          hovered
            ? { scale: 1, transition: { duration: 0.4 } }
            : { scale: 0, transition: { duration: 0.4 } }
        }
      ></motion.div>
      <motion.div
        className={styles.text}
        onMouseEnter={() => {
          setHovered(true);
        }}
        onMouseLeave={() => {
          setHovered(false);
        }}
        initial={{ opacity: "0%", y: 10 }}
        animate={hovered ? { opacity: "100%", y: 0 } : { opacity: "0%", y: 10 }}
        transition={{ duration: 0.4 }}
      >
        <p className={styles.title}>{title}</p>
        <p className={styles.desc}>{description}</p>
      </motion.div>
    </div>
  );
};

export default PortfoComponent;
