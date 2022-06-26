import React from "react";
import Container from "../Container/Container";
import styles from "./About.module.scss";
import Button from "../Button/Button";

const About = ({ color, lines }) => {
  return (
    <div className={styles.wrapper} id="resume">
      <Container lines={lines}>
        <div className={styles.container}>
          <h2 className={styles.h2}>About</h2>
          <div className={styles.total}>
            <div className={styles.content}>
              <img
                src="./images/Farhad-Faraji.jpg"
                className={styles.img}
                alt="Farhad Faraji"
              />
              <div className={styles.text}>
                <p className={styles.aboutText}>
                  Hello! I'm Farhad Faraji. Web designer, Music Composer and
                  Audio Engineer. I have rich experience in Music Production;
                  also, I have a passion for programming and while I am already
                  skilled at Frontend development, I am always looking to learn
                  and improve.
                </p>
                <div className={styles.details}>
                  <p className={styles.p} style={{ color }}>
                    Born <span className={styles.span}>1996</span>
                  </p>
                  <p className={styles.p} style={{ color }}>
                    Residence <span className={styles.span}>Iran/Turkey</span>
                  </p>
                  <p className={styles.p} style={{ color }}>
                    Email
                    <span className={styles.span}> farhadham2@gmail.com </span>
                  </p>
                  <p className={styles.p} style={{ color }}>
                    Phone
                    <span className={styles.span}> +90 (543) 455 21 60</span>
                  </p>
                </div>
              </div>
            </div>
            <a href="https://farhadf.com/cv.pdf">
              <Button color={color} text={"Download CV"} />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
