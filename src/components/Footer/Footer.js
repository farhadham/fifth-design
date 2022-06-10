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
        <p className={styles.p}>E: farhadham2@gmail.com</p>
        <p className={styles.p}>T: +90 (543) 455 21 60</p>
      </div>
      <div className={styles.media}>
        <p className={styles.p}>Follow Me</p>
        <div className={styles.rectangle}></div>
        <AiFillLinkedin
          className={styles.icon}
          onMouseEnter={() => {
            setLinkHovered(true);
          }}
          onMouseLeave={() => {
            setLinkHovered(false);
          }}
        />
        <AiFillYoutube
          className={styles.icon}
          onMouseEnter={() => {
            setLinkHovered(true);
          }}
          onMouseLeave={() => {
            setLinkHovered(false);
          }}
        />
        <AiFillInstagram
          className={styles.icon}
          onMouseEnter={() => {
            setLinkHovered(true);
          }}
          onMouseLeave={() => {
            setLinkHovered(false);
          }}
        />
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
