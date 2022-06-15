import React from "react";
import Container from "../Container/Container";
import styles from "./Clients.module.scss";
import { motion } from "framer-motion";

const Clients = ({ color, lines }) => {
  return (
    <div className={styles.wrapper}>
      <Container lines={lines}>
        <div className={styles.container}>
          <h2 className={styles.h2}>Clients</h2>
          <div className={styles.total}>
            <motion.img
              className={styles.img}
              src="./images/overwolf.png"
              alt="overwolf"
              initial={{ opacity: "50%" }}
              whileHover={{ opacity: "100%" }}
            />
            <motion.img
              className={styles.img}
              src="./images/nhl.png"
              alt="nhl"
              initial={{ opacity: "50%" }}
              whileHover={{ opacity: "100%" }}
            />
            <motion.img
              className={styles.img}
              src="./images/eventopeople.png"
              alt="eventopeople"
              initial={{ opacity: "50%" }}
              whileHover={{ opacity: "100%" }}
            />
            <motion.img
              className={styles.img}
              src="./images/rowing.png"
              alt="rowing"
              initial={{ opacity: "50%" }}
              whileHover={{ opacity: "100%" }}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Clients;
