import React, { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import BackgroundImage from "../BackgroundImage/BackgroundImage.js";
import Container from "../Container/Container";
import { motion, AnimatePresence } from "framer-motion";

const Header = ({ color, lines }) => {
  const [head1, setHead1] = useState(false);
  const [head2, setHead2] = useState(false);
  const [head3, setHead3] = useState(false);

  useEffect(() => {
    setHead1(true);
    setTimeout(() => {
      setHead1(false);
    }, 2000);

    setInterval(() => {
      setHead1(true);
      setTimeout(() => {
        setHead1(false);
      }, 2000);
    }, 9000);

    setTimeout(() => {
      setHead2(true);
      setTimeout(() => {
        setHead2(false);
      }, 2000);

      setInterval(() => {
        setHead2(true);
        setTimeout(() => {
          setHead2(false);
        }, 2000);
      }, 9000);
    }, 3000);

    setTimeout(() => {
      setHead3(true);
      setTimeout(() => {
        setHead3(false);
      }, 2000);

      setInterval(() => {
        setHead3(true);
        setTimeout(() => {
          setHead3(false);
        }, 2000);
      }, 9000);
    }, 6000);
  }, []);

  return (
    <div className={styles.wrapper} id="header">
      <BackgroundImage />
      <Container lines={lines}>
        <div className={styles.container}>
          <div className={styles.h2}>
            <AnimatePresence>
              {head1 && (
                <motion.h2
                  initial={{ y: -100 }}
                  animate={{
                    y: 0,
                  }}
                  exit={{ y: 100 }}
                  transition={{
                    duration: 1,
                  }}
                >
                  I develope <span style={{ color: color }}>websites</span>
                </motion.h2>
              )}
            </AnimatePresence>
          </div>
          <div className={styles.h2}>
            <AnimatePresence>
              {head2 && (
                <motion.h2
                  initial={{ y: -100 }}
                  animate={{
                    y: 0,
                  }}
                  exit={{ y: 100 }}
                  transition={{
                    duration: 1,
                  }}
                >
                  I produce <span style={{ color: color }}>music</span>
                </motion.h2>
              )}
            </AnimatePresence>
          </div>
          <div className={styles.h2}>
            <AnimatePresence>
              {head3 && (
                <motion.h2
                  initial={{ y: -100 }}
                  animate={{
                    y: 0,
                  }}
                  exit={{ y: 100 }}
                  transition={{
                    duration: 1,
                  }}
                >
                  I develop <span style={{ color: color }}>games</span>
                </motion.h2>
              )}
            </AnimatePresence>
          </div>
          {/* <div className={styles.h2}>
            <motion.h2
              animate={{
                y: [-100, 0, 0, 100],
              }}
              transition={{
                duration: 2.5,
                repeatType: "reverse",
                repeat: Infinity,
                repeatDelay: 5,
                delay: 5,
              }}
            >
              I develope <span style={{ color: color }}>games</span>
            </motion.h2>
          </div> */}
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
