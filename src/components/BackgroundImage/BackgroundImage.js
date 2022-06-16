import React from "react";
import styles from "./BackgroundImage.module.scss";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const BackgroundImage = () => {
  const { scrollYProgress } = useViewportScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -2000]);

  return <motion.div className={styles.wrapper} style={{ y }}></motion.div>;
};

export default BackgroundImage;
