import React, { useState } from "react";
import Container from "../Container/Container";
import styles from "./Portfolio.module.scss";
import PortfoComponent from "../PortfoComponent/PortfoComponent";

const Portfolio = ({ color, lines }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className={styles.wrapper} id="portfolio">
      <Container lines={lines}>
        <div className={styles.container}>
          <h2 className={styles.h2}>Portfolio</h2>
          <div className={styles.category}>
            <h3 className={styles.h3}>Frontend</h3>
            <h3 className={styles.h3}>Music</h3>
            <h3 className={styles.h3}>Backend</h3>
            <h3 className={styles.h3}>Game</h3>
          </div>
          <div className={styles.total}>
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
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Portfolio;
