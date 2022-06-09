import React, { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import BackgroundImage from "../BackgroundImage/BackgroundImage.js";
import Container from "../Container/Container";

const texts = ["develope websites"];

const Header = ({ color, lines }) => {
  const [text, setText] = useState("I");

  useEffect(() => {
    for (let i = 0; i < texts[0].length; i++) {
      setTimeout(() => {
        console.log(i);
        setText("I " + texts[0].slice(0, i + 1));
      }, 50 + i * 50);
    }
  }, []);

  return (
    <div className={styles.wrapper} id="header">
      <BackgroundImage />
      <Container lines={lines}>
        <h2>{text}</h2>
        <h1>
          Hello, I’m <strong style={{ color: color }}>Farhad Faraji</strong>,
          Web Developer, Game Designer,
          <br />
          Music Producer & Audio Engineer.
        </h1>
      </Container>
    </div>
  );
};

export default Header;
