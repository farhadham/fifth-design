import React from "react";
import styles from "./Footer.module.scss";
import {
  AiFillLinkedin,
  AiFillYoutube,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";

const Footer = ({ setLinkHovered }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.address}>
        <a href="mailto:farhadham2@gmail.com" className={styles.a}>
          <p className={styles.p}>E: farhadham2@gmail.com</p>
        </a>
        <p className={styles.p}>T: +90 (543) 455 21 60</p>
      </div>
      <div className={styles.media}>
        <p className={styles.p}>Follow Me</p>
        <div className={styles.rectangle}></div>
        <a
          href="https://www.linkedin.com/in/farhadfaraji/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin
            className={styles.icon}
            onMouseEnter={() => {
              setLinkHovered(true);
            }}
            onMouseLeave={() => {
              setLinkHovered(false);
            }}
          />
        </a>
        <a
          href="https://youtube.com/playlist?list=PLcnSVJu2jjrt58Z3nfD542WQJ0MKQ_Rks"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillYoutube
            className={styles.icon}
            onMouseEnter={() => {
              setLinkHovered(true);
            }}
            onMouseLeave={() => {
              setLinkHovered(false);
            }}
          />
        </a>
        <a
          href="https://www.instagram.com/farsounds/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillInstagram
            className={styles.icon}
            onMouseEnter={() => {
              setLinkHovered(true);
            }}
            onMouseLeave={() => {
              setLinkHovered(false);
            }}
          />
        </a>

        <AiFillTwitterSquare
          className={styles.icon}
          onMouseEnter={() => {
            setLinkHovered(true);
          }}
          onMouseLeave={() => {
            setLinkHovered(false);
          }}
        />
      </div>
    </div>
  );
};

export default Footer;
