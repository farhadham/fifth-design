import React from "react";
import Container from "../Container/Container";
import styles from "./Contact.module.scss";
import { motion } from "framer-motion";
import Button from "../Button/Button";

const Contact = ({ color, lines }) => {
  return (
    <div className={styles.wrapper} id="contact">
      <Container lines={lines}>
        <div className={styles.container}>
          <h2 className={styles.h2}>Contact</h2>
          <div className={styles.total}>
            <form
              action="https://formsubmit.co/farhadham2@gmail.com"
              method="POST"
            >
              <motion.input
                className={styles.name}
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required
              />
              <input
                className={styles.email}
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
              <textarea
                className={styles.textarea}
                id="message"
                rows="4"
                placeholder="Message"
                name="text"
                required
              ></textarea>
              <Button color={color} text={"Contact Me"} />
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
