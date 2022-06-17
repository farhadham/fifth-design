import React from "react";
import styles from "./Experience.module.scss";
import Container from "../Container/Container";

const Experience = ({ color, lines }) => {
  return (
    <div className={styles.wrapper}>
      <Container lines={lines}>
        <div className={styles.container}>
          <div className={styles.total}>
            <div className={styles.experience}>
              <h2 className={styles.h2}>Experience</h2>
              <div className={styles.elements}>
                <div className={styles.el}>
                  <p className={styles.date}>2019 - Present</p>
                  <p style={{ color }} className={styles.title}>
                    Music Composer/Audio Engineer - Fiverr.com
                  </p>
                  <p className={styles.desc}>
                    I have worked as a freelance Music Composer and Audio
                    Engineer for more than 190 projects, including indie films,
                    videogames, trailers, and soundtracks.
                  </p>
                </div>
                <div className={styles.el}>
                  <p className={styles.date}>2021 - Present</p>
                  <p style={{ color }} className={styles.title}>
                    Frontend Developer - Fiverr.com
                  </p>
                  <p className={styles.desc}>
                    I have worked as a Frontend Developer using ReactJS since
                    2022.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.education}>
              <h2 className={styles.h2}>Education</h2>
              <div className={styles.elements}>
                <div className={styles.el}>
                  <p className={styles.date}>2013 - 2017</p>
                  <p style={{ color }} className={styles.title}>
                    Bachelor's Degree - Civil Engineering
                  </p>
                  <p className={styles.desc}>
                    I have graduated from one of the top 5 universities in my
                    country with a score of 16 from 20.
                  </p>
                </div>
                <div className={styles.el}>
                  <p className={styles.date}>2021</p>
                  <p style={{ color }} className={styles.title}>
                    CS50's Understanding Technology - Harvard University
                  </p>
                  <a
                    href="https://drive.google.com/file/d/1zK0I6izWqq9z_R8VSEUUaFs3TTfhC921/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="./images/cs50.png"
                      width={"70px"}
                      alt="Harvard cs50 understanding technology"
                    />
                  </a>
                </div>
                <div className={styles.el}>
                  <p className={styles.date}>2021</p>
                  <p style={{ color }} className={styles.title}>
                    JS/HTML/CSS/React/Game/Python - Sololearn
                  </p>
                  <div>
                    <a
                      href="https://www.sololearn.com/certificates/course/en/24605923/1024/landscape/pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="./images/sololearn-js.png"
                        width={"70px"}
                        alt="Sololearn JavaScript"
                        className={styles.img}
                      />
                    </a>
                    <a
                      href="https://www.sololearn.com/Certificate/1014-24605923/pdf/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="./images/sololearn-html.png"
                        width={"70px"}
                        alt="Sololearn HTML"
                        className={styles.img}
                      />
                    </a>
                    <a
                      href="https://www.sololearn.com/Certificate/1023-24605923/pdf/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="./images/sololearn-html.png"
                        width={"70px"}
                        alt="Sololearn CSS"
                        className={styles.img}
                      />
                    </a>
                    <a
                      href="https://www.sololearn.com/Certificate/1097-24605923/pdf/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="./images/sololearn-html.png"
                        width={"70px"}
                        alt="Sololearn React Redux"
                        className={styles.img}
                      />
                    </a>
                    <a
                      href="https://www.sololearn.com/Certificate/1140-24605923/pdf/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="./images/sololearn-html.png"
                        width={"70px"}
                        alt="Sololearn Game Development with JS"
                        className={styles.img}
                      />
                    </a>
                    <a
                      href="https://www.sololearn.com/certificates/course/en/24605923/1172/landscape/pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="./images/sololearn-python.png"
                        width={"70px"}
                        alt="Sololearn Python"
                        className={styles.img}
                      />
                    </a>
                  </div>
                </div>
                <div className={styles.el}>
                  <p className={styles.date}>2021</p>
                  <p style={{ color }} className={styles.title}>
                    The Fundementals of Digital Marketing - Google Inc.
                  </p>
                  <a
                    href="https://drive.google.com/file/d/1XBrw2G1_wRIuEHlLeZlaA3OI2ryPoBv-/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="./images/google.png"
                      width={"70px"}
                      alt="The Fundementals of Digital Marketing"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      ;
    </div>
  );
};

export default Experience;
