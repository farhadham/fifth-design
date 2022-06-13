import React, { useState } from "react";
import styles from "./Nav.module.scss";
import { motion } from "framer-motion";
import MenuOverlay from "../MenuOverlay/MenuOverlay";

const Nav = ({ setLinkHovered }) => {
  const [burgerOn, setBurgerOn] = useState(false);
  const [overlay, setOverlay] = useState(false);

  return (
    <div className={styles.wrapper}>
      <MenuOverlay overlay={overlay} setOverlay={setOverlay} />
      <div className={styles.container}>
        <div>
          <a
            href="#header"
            className={`${styles.a}`}
            onMouseEnter={() => {
              setLinkHovered(true);
            }}
            onMouseLeave={() => {
              setLinkHovered(false);
            }}
          >
            <motion.div
              className={styles.cont}
              initial={{ y: 0 }}
              whileHover={{ y: -40 }}
              transition={{ duration: 0.3 }}
            >
              <span className={styles.span}>
                Farhad <strong className={styles.strong}>Faraji</strong>
              </span>
              <span className={styles.span}>
                Farhad <strong className={styles.strong}>Faraji</strong>
              </span>
            </motion.div>
          </a>
        </div>
        <div className={styles.links}>
          <div>
            <a
              href="#header"
              className={`${styles.a}`}
              onMouseEnter={() => {
                setLinkHovered(true);
              }}
              onMouseLeave={() => {
                setLinkHovered(false);
              }}
            >
              <motion.div
                className={styles.cont}
                initial={{ y: 0 }}
                whileHover={{ y: -40, color: "#ffffff" }}
                transition={{ duration: 0.3 }}
              >
                <span className={styles.span}>Home</span>
                <span className={styles.span}>Home</span>
              </motion.div>
            </a>
          </div>
          <div>
            <a
              href="#resume"
              className={`${styles.a}`}
              onMouseEnter={() => {
                setLinkHovered(true);
              }}
              onMouseLeave={() => {
                setLinkHovered(false);
              }}
            >
              <motion.div
                className={styles.cont}
                initial={{ y: 0 }}
                whileHover={{ y: -40, color: "#ffffff" }}
                transition={{ duration: 0.3 }}
              >
                <span className={styles.span}>Resume</span>
                <span className={styles.span}>Resume</span>
              </motion.div>
            </a>
          </div>
          <div>
            <a
              href="#portfolio"
              className={`${styles.a}`}
              onMouseEnter={() => {
                setLinkHovered(true);
              }}
              onMouseLeave={() => {
                setLinkHovered(false);
              }}
            >
              <motion.div
                className={styles.cont}
                initial={{ y: 0 }}
                whileHover={{ y: -40, color: "#ffffff" }}
                transition={{ duration: 0.3 }}
              >
                <span className={styles.span}>Portfolio</span>
                <span className={styles.span}>Portfolio</span>
              </motion.div>
            </a>
          </div>
        </div>
        <div
          className={styles.hamburger}
          onClick={() => {
            setBurgerOn(!burgerOn);
            setOverlay(!overlay);
          }}
        >
          <motion.div
            className={`${styles.line}`}
            animate={burgerOn ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          ></motion.div>
          <motion.div
            className={`${styles.line}`}
            animate={burgerOn ? { scale: 0 } : { scale: 1 }}
            transition={{ duration: 0.2 }}
          ></motion.div>
          <motion.div
            className={`${styles.line}`}
            animate={burgerOn ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          ></motion.div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
