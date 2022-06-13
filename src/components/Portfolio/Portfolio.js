import React, { useState } from "react";
import Container from "../Container/Container";
import styles from "./Portfolio.module.scss";
import PortfoComponent from "../PortfoComponent/PortfoComponent";
import { motion } from "framer-motion";

const Portfolio = ({ color, lines, setLinkHovered }) => {
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <div className={styles.wrapper} id="portfolio">
      <Container lines={lines}>
        <div className={styles.container}>
          <h2 className={styles.h2}>Portfolio</h2>
          <div className={styles.category}>
            <motion.h3
              className={styles.h3}
              onMouseEnter={() => {
                setLinkHovered(true);
              }}
              onMouseLeave={() => {
                setLinkHovered(false);
              }}
              animate={pageNumber === 1 ? { color } : { color: "#eeeeee" }}
              transition={{ duration: 0.4 }}
              onClick={() => {
                setPageNumber(1);
              }}
            >
              Frontend
            </motion.h3>
            <motion.h3
              className={styles.h3}
              onMouseEnter={() => {
                setLinkHovered(true);
              }}
              onMouseLeave={() => {
                setLinkHovered(false);
              }}
              animate={pageNumber === 2 ? { color } : { color: "#eeeeee" }}
              transition={{ duration: 0.4 }}
              onClick={() => {
                setPageNumber(2);
              }}
            >
              Music
            </motion.h3>
            <motion.h3
              className={styles.h3}
              onMouseEnter={() => {
                setLinkHovered(true);
              }}
              onMouseLeave={() => {
                setLinkHovered(false);
              }}
              animate={pageNumber === 3 ? { color } : { color: "#eeeeee" }}
              transition={{ duration: 0.4 }}
              onClick={() => {
                setPageNumber(3);
              }}
            >
              Backend
            </motion.h3>
            <motion.h3
              className={styles.h3}
              onMouseEnter={() => {
                setLinkHovered(true);
              }}
              onMouseLeave={() => {
                setLinkHovered(false);
              }}
              animate={pageNumber === 4 ? { color } : { color: "#eeeeee" }}
              transition={{ duration: 0.4 }}
              onClick={() => {
                setPageNumber(4);
              }}
            >
              Game
            </motion.h3>
          </div>
          <div className={styles.total}>
            {pageNumber === 1 && (
              <motion.div
                className={styles.subCategory}
                initial={{ scale: 0 }}
                animate={{
                  scale: 1,
                }}
                transition={{ duration: 0.5 }}
              >
                <PortfoComponent
                  image={"front-portfo-1"}
                  title={"FarhadF.com"}
                  description={"Personal Portfolio Website"}
                  color={color}
                  link={"FarhadF.com"}
                />
                <PortfoComponent
                  image={"front-portfo-2"}
                  title={"FarhadF.com"}
                  description={"Personal Portfolio Website"}
                  color={color}
                  link={"kittenhouseclub.onrender.com"}
                />
                <PortfoComponent
                  image={"front-portfo-3"}
                  title={"FarhadF.com"}
                  description={"Personal Portfolio Website"}
                  color={color}
                  link={"dontmintthis.onrender.com"}
                />
              </motion.div>
            )}

            {pageNumber === 2 && (
              <motion.div
                className={styles.subCategory}
                initial={{ scale: 0 }}
                animate={{
                  scale: 1,
                }}
                transition={{ duration: 0.5 }}
              >
                <PortfoComponent
                  image={"portfo1"}
                  title={"FarhadF.com"}
                  description={"Personal Portfolio Website"}
                  color={color}
                />
                <PortfoComponent
                  image={"portfo1"}
                  title={"FarhadF.com"}
                  description={"Personal Portfolio Website"}
                  color={color}
                />
                <PortfoComponent
                  image={"portfo1"}
                  title={"FarhadF.com"}
                  description={"Personal Portfolio Website"}
                  color={color}
                />
                <PortfoComponent
                  image={"portfo1"}
                  title={"FarhadF.com"}
                  description={"Personal Portfolio Website"}
                  color={color}
                />
              </motion.div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Portfolio;
