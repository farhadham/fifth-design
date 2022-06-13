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
                  <p>2013 - Present</p>
                  <p>Art Director - Facebook Inc.</p>
                  <p>
                    Collaborate with creative and development teams on the
                    execution of ideas.
                  </p>
                </div>
                <div className={styles.el}>
                  <p>2013 - Present</p>
                  <p>Art Director - Facebook Inc.</p>
                  <p>
                    Collaborate with creative and development teams on the
                    execution of ideas.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.education}>
              <h2 className={styles.h2}>Education</h2>
              <div className={styles.elements}>
                <div className={styles.el}>
                  <p>2013 - Present</p>
                  <p>Art Director - Facebook Inc.</p>
                  <p>
                    Collaborate with creative and development teams on the
                    execution of ideas.
                  </p>
                  <p>Download Certificate</p>
                </div>
                <div className={styles.el}>
                  <p>2013 - Present</p>
                  <p>Art Director - Facebook Inc.</p>
                  <p>
                    Collaborate with creative and development teams on the
                    execution of ideas.
                  </p>
                  <p>Download Certificate</p>
                </div>
                <div className={styles.el}>
                  <p>2013 - Present</p>
                  <p>Art Director - Facebook Inc.</p>
                  <p>
                    Collaborate with creative and development teams on the
                    execution of ideas.
                  </p>
                  <p>Download Certificate</p>
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
